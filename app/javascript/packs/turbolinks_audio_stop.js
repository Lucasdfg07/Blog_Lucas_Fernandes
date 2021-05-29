import $ from 'jquery';

$(document).on('turbolinks:click', function() {
    $('audio').remove();
})