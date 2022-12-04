const WebsocketServer = require('ws'),
    WSS = new WebsocketServer.Server({port: 3232});

WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        let messageText = message.toString();

        if (messageText == "/close"){
            ws.close();
        } else {
            WSS.clients.forEach((client)=>{
                client.send(messageText);
            })
        }

        console.log(messageText);
    });

    console.log('Connected');
});