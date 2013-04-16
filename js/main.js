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
    $('input:checkbox').on('change', function() {
        //First thing to do on every change: go over all checkboxes.

        //Save the collection of checked checkboxes
        var checked = $('input:checkbox:checked');

        //And the the collection of unchecked checkboxes
        var unchecked = $('input:checkbox:not(:checked)');


        if (checked.length === 0) {
            //Not a single box is checked
            //Remove all extra classes, default CSS will take over
            $('figure').each(function() {
                this.classList.remove('hidden');
            });

            //Re-enable all checkboxes
            $('input:checkbox').each(function() {
                $(this).attr('disabled', false);
            })
        } else {
            $('figure').each(function() {
                var classes = $(this).children('img').attr('class').split(' ');
                var allPresent = true;

                //The value will be the actual line of HTML, since we come from a jQuery object
                $.each(checked, function(index, pureHtml) {
                    if (classes.indexOf(pureHtml.value) === -1) {
                        //If even one of the checked values is not present in the image, don't display that image.
                        allPresent = false;
                    }
                });

                if (!allPresent) {
                    this.classList.add('hidden');
                } else {
                    this.classList.remove('hidden');
                }
            });

            //Now checked if further combinations are possible.
            //Values for which this is not possible should have their checkboxes disabled.
            var visibleItems = $('figure:not(.hidden)');

            $.each(unchecked, function(index, pureHtml) {
                var comboPossible = false;

                $.each(visibleItems, function() {
                    var classes = $(this).children('img').attr('class').split(' ');
                    
                    if(classes.indexOf(pureHtml.value) !== -1) {
                        comboPossible = true;
                    }
                });

                if (!comboPossible) {
                    $(this).attr('disabled', true);
                } else {
                    $(this).attr('disabled', false);
                }
            });

        }
    });
    /**
     * End logic section
     */
});