const WebsocketServer = require('ws'),
    WSS = new WebsocketServer.Server({port: 3232});


WSS.on('connection', (ws)=>{
    ws.on('message', (message)=>{
        WSS.clients.forEach((client)=>{
            client.send(message.toString());
        })

        console.log(message.toString());
    });

    console.log('Connected');
});