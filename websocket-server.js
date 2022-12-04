const WebsocketServer = require('ws'),
    WSS = new WebsocketServer.Server({port: 3232});


WSS.on('connection', (ws)=>{
    console.log('Connected');
});