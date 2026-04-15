//Home Page news Slider Start  
$(function() {
    $(".demo1").bootstrapNews({
        newsPerPage: 7,
        autoplay: true,
        pauseOnHover: true,
        direction: 'up',
        newsTickerInterval: 4000,
        onToDo: function() {

        }

    });


});


///News left popup///////////////////////////////////////////////

$(window).load(function() {
    $('#willVisible').animate({
        left: 0
    }, 1500);
});

function show(target) {
    document.getElementById(target).style.display = 'block';
}

function hide() {
    $('#willVisible').animate({
        left: -500
    }, 1000);
}

$("#willVisible").hover(function() {
    $('.flyout').removeClass('hidden');
}, function() {
    $('.flyout').addClass('hidden');
});



var delayb4scroll = 2000 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed = 1 //Specify marquee scroll speed (larger is faster 1-10)
var pauseit = 1 //Pause marquee onMousever (0=no. 1=yes)?

////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed = marqueespeed
var pausespeed = (pauseit == 0) ? copyspeed : 0
var actualheight = ''

function scrollmarquee() {
    if ($('#marqueecontainer').height() < $('#vmarquee').height()) {
        if (parseInt(cross_marquee.style.top) > (actualheight * (-1) + 8))
            cross_marquee.style.top = parseInt(cross_marquee.style.top) - copyspeed + "px";
        else
            cross_marquee.style.top = "0px";
    }
}

function initializemarquee() {
    cross_marquee = document.getElementById("vmarquee")
    //cross_marquee.style.top=0

    //marqueeheight=document.getElementById("marqueecontainer").offsetHeight
    //actualheight=cross_marquee.offsetHeight;

    if ($('#marqueecontainer').height() < $('#vmarquee').height()) {
        var div = cross_marquee.cloneNode(true);
        div.style.left = '0px';
        div.style.top = actualheight + 'px';
        cross_marquee.appendChild(div);
    }

    if (window.opera || navigator.userAgent.indexOf("Netscape/7") != -1) { //if Opera or Netscape 7x, add scrollbars to scroll and exit
        cross_marquee.style.height = marqueeheight + "px"
        cross_marquee.style.overflow = "scroll"
        return
    }
    setTimeout('lefttime=setInterval("scrollmarquee()",30)', delayb4scroll)
}

if (window.addEventListener)
    window.addEventListener("load", initializemarquee, false)
else if (window.attachEvent)
    window.attachEvent("onload", initializemarquee)
else if (document.getElementById)
    window.onload = initializemarquee