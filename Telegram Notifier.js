var token = "<insert tele token>";
var telegramUrl = "https://api.telegram.org/bot" + token;
var groupId = "<insert tele group id>";

function sendMessage(id, text) {
  if (text == "") {
    Logger.log("Text content: " + text);
    text = "No message content provided.";
  }

  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(id),
      text: text,
      parse_mode: "HTML",
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}

function myFunction() {
  var form = FormApp.getActiveForm();
  var allResponses = form.getResponses();
  var latestResponse = allResponses[allResponses.length - 1];
  var response = latestResponse.getItemResponses();

  var text = "Responses:\n";
  for (var i = 1; i <= 3 && i < response.length; i++) {
    var answer = response[i].getResponse();
    text += `Response ${i}:\n${answer}\n\n`;
  }

  // Send the message to the group
  sendMessage(groupId, text);
}

