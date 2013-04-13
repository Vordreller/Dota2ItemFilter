$(document).ready(function() {
    /**
     * Start view section
     */

    //Get the length of the longest piece of text
    var getMaxWidth = function() {
        var max = 0;
        $("label").each(function() {
            if ($(this).innerWidth() > max) {
                max = $(this).innerWidth();
            }
        });
        return max;
    };

    //Set the padding for each checkbox
    var setMaxWidth = function(max) {
        $("label").each(function() {
            $(this).css('padding-right', (max - $(this).innerWidth()) + 'px');
        });
    };

    //Make all checkboxes display under eachother.
    setMaxWidth(getMaxWidth());

    /**
     * End view section
     */


    /**
     * Start logic section
     */

    //Upon checking or unchecking a checkbox, hide or display all items not related to it.
    $('input:checkbox').on('change', function(e) {
        //First thing to do on every change: go over all checkboxes.
        //Push 1 for checked, 0 for not checked.
        var sList = [];
        $('input:checkbox').each(function() {
            var sThisVal = (this.checked ? 1 : 0);
            sList.push(sThisVal);
        });

        //If not a single checkbox checked, display all items. Else, display only revelant items.
        if (sList.indexOf(1) === -1) {
            //Not a single box is checked
            //Remove all extra classes, default CSS will take over
            $('figure').each(function() {
                this.classList.remove('hidden');
            });
        } else {
            //Make all types of items invisible
            $('figure').each(function() {
                this.classList.add('hidden');
            });

            //Now find the checked checkboxes, put their indexes in an array.
            var indexArray = findIndexesWithValue(sList, 1);

            //Now that we have the checked indexes, make an array of their values
            var valuesArray = getCheckboxValues(indexArray).sort();

            //Now we have a list of all types of items we want to see. Continue from here.
            //console.log(valuesArray);

            $('figure').each(function() {
                //Get the classes of each img, which contain the terms which need to be checked
                var classes = $(this).children('img').attr('class').split(' ').sort();
                var result = array_intersect(valuesArray, classes);

                if (arraysEqual(valuesArray, result)) {
                    this.classList.remove('hidden');
                } else {
                    this.classList.add('hidden');
                }
            });
        }
    });


    var findIndexesWithValue = function(arr, val) {
        var indexArray = $.map(arr, function(elementOfArray, indexInArray) {
            return elementOfArray === val ? indexInArray : null;
        });

        return indexArray;
    };

    var getCheckboxValues = function(arr) {
        var valuesArray = [];

        $('input:checkbox').each(function(index, Element) {
            //If we have a matching index, push the value in to the array
            if (arr.indexOf(index) !== -1) {
                valuesArray.push(Element.value);
            }
        });

        return valuesArray;
    };

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--; ) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }


    function array_intersect(arr1) {
        // http://kevin.vanzonneveld.net
        // +   original by: Brett Zamir (http://brett-zamir.me)
        // %        note 1: These only output associative arrays (would need to be
        // %        note 1: all numeric and counting from zero to be numeric)
        // *     example 1: $array1 = {'a' : 'green', 0:'red', 1: 'blue'};
        // *     example 1: $array2 = {'b' : 'green', 0:'yellow', 1:'red'};
        // *     example 1: $array3 = ['green', 'red'];
        // *     example 1: $result = array_intersect($array1, $array2, $array3);
        // *     returns 1: {0: 'red', a: 'green'}
        var retArr = [],
                argl = arguments.length,
                arglm1 = argl - 1,
                k1 = '',
                arr = {},
                i = 0,
                k = '';

        arr1keys: for (k1 in arr1) {
            arrs: for (i = 1; i < argl; i++) {
                arr = arguments[i];
                for (k in arr) {
                    if (arr[k] === arr1[k1]) {
                        if (i === arglm1) {
                            retArr[k1] = arr1[k1];
                        }
                        // If the innermost loop always leads at least once to an equal value, continue the loop until done
                        continue arrs;
                    }
                }
                // If it reaches here, it wasn't found in at least one array, so try next value
                continue arr1keys;
            }
        }

        return retArr;
    }


    /**
     * End logic section
     */
});