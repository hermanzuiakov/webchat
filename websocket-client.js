const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload)=>{
    displayMessages(payload.data);
    console.log(payload.data);
}

WS.onopen = () => {
    displayTitle("CONNECTED TO SERVER");
    console.log("CONNECTION IS OPENED");
}
WS.onclose = () => {
    displayTitle("UNCONNECTED TO SERVER");
    console.log("CONNECTION IS CLOSED");
}

function displayTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function displayMessages(message) {
    const messagesWrapper = document.getElementById('messages');

    let messageBox = document.createElement('div');
    messageBox.classList.add('message');
    messageBox.innerHTML = `<div class="message">${message}</div>`;

    messagesWrapper.appendChild(messageBox);
}

document.forms[0].onsubmit = ()=>{
    let inputValue = document.getElementById('message').value;
    WS.send(inputValue);
}