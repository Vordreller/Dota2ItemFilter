document.addEventListener('DOMContentLoaded', function() {
    //http://youmightnotneedjquery.com/
    function outerWidth(el, includeMargin) {
        var height = el.offsetWidth;

        if (includeMargin) {
            var style = getComputedStyle(el);
            height += parseInt(style.marginLeft) + parseInt(style.marginRight);
        }
        return height;
    }

    var forEach = Array.prototype.forEach;

    /**
     * Start view section
     */

    var labels = document.querySelectorAll("label");

    //Get the length of the longest piece of text
    var getMaxWidth = function() {
        var max = 0;

        forEach.call(labels, function(item, i) {
            if (outerWidth(item, false) > max) {
                max = outerWidth(item, false);
            }
        });
        return max;
    };

    //Set the padding for each checkbox
    var setMaxWidth = function(max) {
        forEach.call(labels, function(item, i) {
            item.style.paddingRight = max - outerWidth(item, false) + 'px';
        });
    };

    //Make all checkboxes display under eachother.
    setMaxWidth(getMaxWidth());

    //-------------------------------

    var setDisabledColor = function() {
        //Get all checkboxes
        var boxes = document.querySelectorAll('input[type="checkbox"]');

        forEach.call(boxes, function(item, i) {
            //If a checkbox is disabled, set the background to a color to show it.
            if (boxes[i].getAttribute('disabled')) {
                boxes[i].parentNode.style.backgroundColor = 'red';
            } else {
                //Else, remove colored background
                boxes[i].parentNode.style.backgroundColor = 'white';
            }
        });
    };

    //Continue here

    //Set the width of the details panel.
    var detailsWidth = function() {
        var details = document.querySelector("#details");
        var body = document.querySelector("body");
        var left = document.querySelector("#left");
        var items = document.querySelector("#items");

        //last one must be false. If not, it will be the distance from the left edge of the screen instead of the actual width.
        details.style.width = outerWidth(body, false) - (outerWidth(left, false) + outerWidth(items, false)) + 'px';
    }

    detailsWidth();

    /**
     * End view section
     */


    /**
     * Start logic section
     */

    //Upon checking or unchecking a checkbox, hide or display all items not related to it.
    var boxes = document.querySelectorAll('input[type="checkbox"]');

    forEach.call(boxes, function(item, i) {
        item.addEventListener('change', function() {

            //Empty the details pane if something was being shown, make sure you're not viewing an item that's not part of the selection.
            var details = document.querySelector('#details');
            details.innerHTML = '';

            //Save the collection of checked checkboxes
            var checked = document.querySelectorAll('input[type="checkbox"]:checked');

            //And the the collection of unchecked checkboxes
            var unchecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)');

            if (checked.length === 0) {
                //Not a single box is checked
                //Remove all extra classes, default CSS will take over
                var figures = document.querySelectorAll('figure');

                forEach.call(figures, function(item, i) {
                    item.classList.remove('hidden');
                });

                //Re-enable all checkboxes
                forEach.call(boxes, function(item, i) {
                    item.removeAttribute("disabled");
                });

            } else {
                var figures = document.querySelectorAll('figure');

                forEach.call(figures, function(item, i) {
                    var classes = item.childNodes[1].classList;
                    var allPresent = true;

                    forEach.call(checked, function(c, i) {
                        if (!classes.contains(c.value)) {
                            //If even one of the checked values is not present in the image, don't display that image.
                            allPresent = false;
                        }
                    });


                    //If an item has the attributes of all checked checkboxes, remove hidden.
                    //If even 1 is missing, set hidden
                    if (!allPresent) {
                        item.classList.add('hidden');
                    } else {
                        item.classList.remove('hidden');
                    }
                });


                //Now check if further combinations are possible.
                //Values for which this is not possible should have their checkboxes disabled.
                var visibleItems = document.querySelectorAll('figure:not(.hidden)');
                console.log(visibleItems);

                //Go over all the unchecked checkboxes
                forEach.call(unchecked, function(item, i) {
                    var comboPossible = false;

                    //Check each visible item and see if a combination is possible, based on its classes
                    forEach.call(visibleItems, function(v, i) {
                        var classes = v.childNodes[1].classList;

                        if (classes.contains(item.value)) {
                            comboPossible = true;
                        }
                    });

                    //Disable if needed
                    if (!comboPossible) {
                        item.setAttribute('disabled', true);
                    } else {
                        //Must be removeAttribute
                        item.removeAttribute('disabled');
                    }
                });
            }

            //And set the backgroundcolor for the disabled checkboxes
            setDisabledColor();
        });
    });

    //Used 3 functions down. Can this be done better?
    var currentFigure = '';

    //Get the info on the item that was clicked on
    var figures = document.querySelectorAll('figure');


    forEach.call(figures, function(item, i) {
        item.addEventListener('click', function() {
            currentFigure = this;
            getItemInfo(this.id);
        });
    });

    var getItemInfo = function(itemName) {
        //http://stackoverflow.com/a/9713078/80907
        var http = new XMLHttpRequest();
        var url = "http://localhost/Dota2ItemFilter/ajax.php";
        var params = "name=" + itemName;
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//Chrome doesn't allow these.
        //http.setRequestHeader("Content-length", params.length);
        //http.setRequestHeader("Connection", "close");

        http.onreadystatechange = function() {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                formatData(JSON.parse(http.responseText));
            }
        }
        http.send(params);
    };

    //This function called once the asynchronous ajax call is done. Should be safe.
    var formatData = function(data) {
        var itemData = traverse(data);
        var details = document.querySelector("#details");
        details.innerHTML = "<ul>" + itemData + "</ul>";
        
        //If this function is executed, the currentFigure will have been set.
        var clone = currentFigure.cloneNode(true);
        clone.classList.add("solo");
        details.insertBefore(clone,details.firstChild);
    }

    var itemPosition = "";
    //Recursive function is the best way to go.
    //Credit: http://stackoverflow.com/a/722732/
    //Also: http://www.youtube.com/watch?v=GxqgcXmbVgs
    function traverse(object) {
        var itemDetails = "";
        //Get all info on the object
        for (var item in object) {
            if (typeof(object[item]) === "object") {
                //Going one step down in the object tree!!
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