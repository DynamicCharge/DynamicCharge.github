$(document).ready(function () {

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            // document.getElementById("nav_bar").style.padding = "10px 10px";
            $('.nav_bar').attr('style','padding: 5px 0px 5px; background: black; border-bottom: 1px solid rgba(255,255,255,.3);');
        } else {
            $('.nav_bar').attr('style','padding: 59px 0px; background: none;');
        }
    }

});