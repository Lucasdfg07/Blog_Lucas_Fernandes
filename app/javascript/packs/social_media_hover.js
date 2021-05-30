import $ from 'jquery';

$(document).on('turbolinks:load', function() {
  $('.youtube_phrase, .whatsapp_phrase').hide()

  $('.youtube_div').hover(function() {
    $('.youtube_phrase').show(400);
  })

  $('.youtube_div').mouseleave(function() {
    $('.youtube_phrase').hide(400);
  })

  $('.whatsapp_div').hover(function() {
    $('.whatsapp_phrase').show(400);
  })

  $('.whatsapp_div').mouseleave(function() {
    $('.whatsapp_phrase').hide(400);
  })
});