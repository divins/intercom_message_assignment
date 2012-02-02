$(document).ready(function() {
  var messagesJSON = chrome.extension.getURL("messages.json");
  var beingAnsweredBy = "Aquest missatge està sent contestat per: ";
  $.getJSON(messagesJSON, function(data) {
    $.each(data, function(key, val) {
      $('table.message_list a[href*="'+ val +'"]').html(beingAnsweredBy + key).css('color', 'red');
    });
  });
});

