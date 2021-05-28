import $ from 'jquery';
import "select2";
import 'select2/dist/css/select2.css';

$(() =>
  $( "#dropdown" ).select2()
);

$(document).ready(function() {
  $( ".dash" ).hide(1000)
})