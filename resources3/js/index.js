const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");

const saveButton = document.getElementById("save-button");
const serverURL = `https://it3049c-chat.fly.dev/messages`;

const MILLISECONDS_IN_TEN_SECONDS = 10000;

async function updateMessages() {
  const messages = await fetchMessages();  // to fetch messages from server
    // const messages = [{
	// "id": 1,
	// "sender": "Yahya Gilany",
	// "text": "You made it, my friend!",
	// "timestamp": 1537410673072
	// }]

    console.log("inside updateMessages")
    console.log(messages);

  let formattedMessages = "";
  messages.forEach(message => {
      formattedMessages += formatMessage(message, nameInput.value);
  });
  //	sample:  
//   {
//     "id": 1,
//     "text": "This is my message",
//     "timestamp": 1537410673072
// }
  if (messages && messages.length > 0) {
    messages.forEach(message => {
      formattedMessages += formatMessage(message, nameInput.value);
    });
  }
  chatBox.innerHTML = formattedMessages;
}

  function fetchMessages() {
  return fetch(serverURL)
    .then(response => response.json())
    .catch(err => {
      console.log("Fetch error occurred: " + err);
      return []; 
    });
}


function formatMessage(message, myNameInput) {
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
      return `
      <div class="mine messages">
        <div class="message">
          ${message.text}
        </div>
        <div class="sender-info">
          ${formattedTime}
        </div>
      </div>
      `
  } 
  else {
    return `
      <div class="yours messages">
        <div class="message">
          ${message.text}
        </div>
        <div class="sender-info">
          ${message.sender} ${formattedTime}
        </div>
      </div>
    `
  }
}


setInterval(updateMessages, MILLISECONDS_IN_TEN_SECONDS);

function sendMessages(username, text) {
  const newMessage = {
    sender: username,
    text: text,
    timestamp: new Date()
  }

  fetch (serverURL, {
      method: `POST`, 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
  });
}


sendButton.addEventListener("click", function(sendButtonClickEvent) {
  sendButtonClickEvent.preventDefault();
  const sender = nameInput.value;
  const message = myMessage.value;

  sendMessages(sender,message);
  myMessage.value = "";
});



