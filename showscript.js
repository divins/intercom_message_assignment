$(document).ready(function() {
  var messagesJSON = chrome.extension.getURL("messages.json");
  chrome.extension.sendRequest({method: "getLocalStorage", key: "name"}, function(response) {
    name = response.data;
  });

  var beingAnsweredBy = "Aquest missatge està sent contestat per: ";
  $.getJSON(messagesJSON, function(data) {
    $.each(data, function(key, val) {
      if ($(location).attr('href').match(val))
        alert(beingAnsweredBy + key);
    });
  });
});


