import $ from 'jquery';

$(document).ready(function() {
    let audio = new Audio('/intro.mp3');
    audio.play();
})