/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 */

$(document).ready(function() {
    // add Fastclick
    $(function() {
    FastClick.attach(document.body);
    });
    //Open the menu
    $("#hamburger").click(function() {

        //set the width of primary content container
        var contentWidth = $('#content').width();

        //set the content with the width that it has originally
        $('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('#contentLayer').css('display', 'block');

        //set margin for the whole container with a JQuery UI animation
        $("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 900
        });

    });

    //close the menu
    $("#contentLayer").click(function() {

        //set margin for the whole container back to original state with a JQuery UI animation
        $("#container").animate({"marginLeft": ["0", 'easeOutExpo']}, {
            duration: 900,
            complete: function() {
                  $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');

            }
        });
    });

});