 $(document).ready(function() {
  $('#button-menu').sideNav({
   menuWidth: 300,
   edge: 'left',
   closeOnClick: true,
   dragable: true,
   onOpen: function(el) {},
   onClose: function(el) {}
  });
  $('select').material_select('destroy');
  $('select').material_select();
  $('select:not([multiple])').material_select();
  $('.datepicker').pickadate({
   selectMonths: true, // Creates a dropdown to control month
   selectYears: 15, // Creates a dropdown of 15 years to control year,
   today: 'Today',
   clear: 'Clear',
   close: 'Ok',
   closeOnSelect: false // Close upon selecting a date,
  });
  $('ul.tabs').tabs();
  $('ul.tabs').tabs('select_tab', 'tab_id');
 });
 