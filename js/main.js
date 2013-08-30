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

    //-------------------------------

    var setDisabledColor = function() {
        //Get all checkboxes
        var boxes = $('input:checkbox');


        $.each(boxes, function(indexInArray, valueOfElement) {
            //If a checkbox is disabled, set the background to a color to show it.
            //I could have added or removed a CSS class, but I'm doing that later in the file and right now I also want to use this method.
            if ($(boxes[indexInArray]).attr('disabled')) {
                $(boxes[indexInArray]).parent().css({'background-color': 'red'});
            } else {
                //Else, remove colored background
                $(boxes[indexInArray]).parent().css({'background-color': 'white'});
            }
        });

    };

    //Set the width of the details panel.
    var detailsWidth = function() {
        $("#details").css('width',($('body').innerWidth() - ($("#left").width() + $("#items").width())) + 'px');
    }

    detailsWidth();

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
            });
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

                //If an item has the attributes of all checked checkboxes, remove hidden.
                //If even 1 is missing, set hidden
                if (!allPresent) {
                    this.classList.add('hidden');
                } else {
                    this.classList.remove('hidden');
                }
            });

            //Now check if further combinations are possible.
            //Values for which this is not possible should have their checkboxes disabled.
            var visibleItems = $('figure:not(.hidden)');

            //Go over all the unchecked checkboxes
            $.each(unchecked, function(index, pureHtml) {
                var comboPossible = false;

                //Check each visible item and see if a combination is possible, based on its classes
                $.each(visibleItems, function() {
                    var classes = $(this).children('img').attr('class').split(' ');

                    if (classes.indexOf(pureHtml.value) !== -1) {
                        comboPossible = true;
                    }
                });

                //Disable if needed
                if (!comboPossible) {
                    $(this).attr('disabled', true);
                } else {
                    $(this).attr('disabled', false);
                }
            });

        }

        //And set the backgroundcolor for the disabled checkboxes
        setDisabledColor();
    });

    var currentFigure = "";

    //Get the info on the item that was clicked on
    $("figure").on('click', function(eventObject) {
        currentFigure = this;
        getItemInfo(this.id);
    });

    var getItemInfo = function(itemName) {
        var jqxhr = $.ajax({
            url: "http://localhost/Dota2ItemFilter/ajax.php",
            type: "POST",
            data: {name: itemName},
            dataType: "json",
        }).fail(function() { alert("error"); });
        
        jqxhr.done(function(data) {
            formatData(data);
        });
    };

    //This function called once the asynchronous ajax call is done. Should be safe.
    var formatData = function(data) {
        var itemData = traverse(data);
        $("#details").html("<ul>"+itemData+"</ul>");
        $(currentFigure).clone().addClass("solo").prependTo("#details");
    }

    var itemPosition = "";
    //Recursive function is the best way to go.
    //Credit: http://stackoverflow.com/a/722732/
    //Also: http://www.youtube.com/watch?v=GxqgcXmbVgs
    function traverse(object) {
        var itemDetails = "";
        //Get all info on the object
        for (var item in object) {
            if (typeof(object[item])=="object") {
                //going on step down in the object tree!!
                itemDetails += "<li>" + item + " : <ul>" + traverse(object[item]) + "</ul></li>";
                
            } else {
                itemDetails += "<li>" + item + " : " + object[item] + "</li>";
            }
        }
        return itemDetails;
    }

    /**
     * End logic section
     */
});