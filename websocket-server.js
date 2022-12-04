const WebsocketServer = require('ws'),
    WSS = new WebsocketServer.Server({port: 3232});


WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        console.log(message.toString());
    });

    console.log('Connected');
});