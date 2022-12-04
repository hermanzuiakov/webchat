const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload)=>{
    console.log(payload);
}

document.forms[0].onsubmit = ()=>{
    let inputValue = document.getElementById('message').value;

    WS.send(inputValue);
}