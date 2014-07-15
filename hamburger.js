/**
 * hamburger.js
 */

$(document).ready(function() {
    // add Fastclick
    $(function() {
    FastClick.attach(document.body);
    });
    //slide menu open
    window.addEventListener('load', function(){ // on page load
    document.body.addEventListener('touchmove', function(e){
        alert(e.changedTouches[0].pageX) // alert pageX coordinate of touch point
        }, false)
    }, false);

    //Open the menu
    $("#hamburger").click(function() {

        //set the width of primary content container
        var contentWidth = $('#content').width();

        //set the content with the width that it has originally
        $('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        $('#contentLayer').css('display', 'block');

        //set margin for the whole container with a JQuery UI animation
        $("#container").animate({"marginLeft": ["70%", 'easeInOutBack']}, {
            duration: 900
        });

    });
     $("#hamburger2").click(function() {

        //set the width of primary content container
        var contentWidth = document.getElementById('content').offsetWidth;

        // set the content with the width that it has originally
        document.getElementById('content').setAttribute("style","width:contentWidth");

        // display a layer to disable clicking and scrolling on the content while menu is shown
        document.getElementById('contentLayer').style.display = 'block';

        // set margin for the whole container
        var contain = document.getElementById('container');
        contain.style.marginLeft= '70%';
    });


    //close the menu
    $("#contentLayer").click(function() {

        //set margin for the whole container back to original state with a JQuery UI animation
        $("#container").animate({"marginLeft": ["0", 'easeInOutBack']}, {
            duration: 900,
            complete: function() {
                  $('#content').css('width', 'auto');
                $('#contentLayer').css('display', 'none');

            }
        });
    });

});