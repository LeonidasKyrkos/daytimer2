'use strict';

var $ = require('jquery');
var time = require('./time');

setInterval(function(){
	$('#time').text(time());
},1000);

//Testing functions

$(document).ready(function(){
    $(window).resize(function() {
        var windowwidth = $(window).width();
        var x = document.getElementById('titlediv');

        if(windowwidth <= "600") {
            x.style.backgroundColor = 'yellow';
        }
        else {
            x.style.backgroundColor = 'rgba(0,255,0,0.5)';
        }
    });
});

$(document).ready(function(){
    $('#titlediv').delay(800).fadeIn(1000);
    $('#thesun').delay(800).fadeIn(500);
    $('#thesea').delay(800).fadeIn(500);
});

$(document).ready(function(){

	$(window).width();
	var y = (150 / $(window).width()) * 100;
	$('#thesun').width(y + '%');

	var x = document.getElementById('thesun');						// Grab the sun element
	var z = document.getElementById('sunheader1');					// Grab the two text elements
	var sh2 = document.getElementById('sunheader2');
    var date = new Date();											// Make a new date object
    var hour = date.getHours();										// Get the current hour (0 - 23)
    var total = 86400000;											// Total hours in ms = 24 * 60 * 60 * 1000
    var minutes = date.getMinutes() * 60 * 1000;					// Get the current minute (0 - 59) in ms
    var remaining = total - ((hour * 60 * 60 * 1000) + minutes);	// Find the remaining ms in the day = total ms - (current hour in ms + current minute in ms)
    var position = (remaining / total) * 100;						// Now we find the position which is a percentage of the right style element
    																// so remaining / total * 100 = where our sun will be. And it will tend to zero
    if (remaining == 0) {											// Better check that remaining isn't equal to zero because 0/total might be weird.

    	position = 0;
    }

    x.style.right = position + '%';

    $('#thesun').animate({
    right: '0%',
    }, remaining);

    if (hour <= 18 && hour >= 9) {

    	z.style.display = 'block';

    } else {

    	sh2.style.display = 'block';

    }
})

$(window).resize(function() {
	$(window).width();
	var y = (150 / $(window).width()) * 100;
	$('#thesun').width(y + '%');
})












