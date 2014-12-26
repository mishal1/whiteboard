function socket(io) {
  io.on('connection', function(socket){

    console.log('A user connected!')

    socket.on('drawing', function(){
      socket.emit('loop')
      // console.log("almost")
    });

    socket.on('disconnect', function(){
      console.log('Client disconnected!')
    });

  });

}

module.exports = socket;