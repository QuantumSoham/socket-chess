const socket=io();
//socket io starts http handshake with express GET /socket.io/?EIO=4&transport=polling
//Server responds with a session id.
//upgrade HTTP → WebSocket
//Socket.IO internally emits the connection event whenever a new client establishes a socket session.
socket.emit("test-event")
socket.on("test-event-received",function(){
    console.log("Received test event ack from backend");
})