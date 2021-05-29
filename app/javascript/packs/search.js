import $ from 'jquery';
import "select2";
import 'select2/dist/css/select2.css';


$(document).on('turbolinks:load', function() {
  let el = $('#dropdown');
  if ($(el).data('select2') == undefined && $(el).next().hasClass('select2-container')) {
    $(el).remove();
  }
  $(el).select2();
});

$(document).ready(function() {
    let placeholder_digit = $('.select2-selection__rendered')
    
    placeholder_digit.html(placeholder_digit[0].outerText + '<span class="pointer">|</span>')
    
    setInterval(function(){ 
      $('.pointer').toggle()
    }, 800);
})