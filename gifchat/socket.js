const WebSocket=require('ws');

module.exports=(server)=>{
  const wss=new WebSocket.Server({server});
  wss.on('connection',(ws,req)=>{
    const ip=req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('new client access', ip);
    ws.on('message',(message)=>{
      console.log(message.toString());
    })
  })
}