// nev bar scroll efacket
var nav = document.getElementById('navBarf');
window.onscroll = function () {
    if (window.pageYOffset > 750) {
        nav.style.position = "fixed";
        nav.style.top = 0; 
    } else {
        nav.style.position = "relative";
        nav.style.top = 750;
    }
}
// nev bar scroll efacket end


// counter up
jQuery(document).ready (function( $ )
{
    $('.counter').counterUp({
        delay: 15,
        time: 1500
    });
});
// counter up end 
