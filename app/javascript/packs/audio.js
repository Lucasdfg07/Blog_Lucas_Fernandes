import $ from 'jquery';

$(document).ready(function() {
    let audio = new Audio('/intro.mp3')
    audio.play()
})

$(() =>
    $(document).on('turbolinks:click', function() {
        $('audio').remove();
    })
);