const io = require("socket.io")();
const userModel = require('./models/user.schema')
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on("connection", function (socket) {
    console.log("kuch bhi")

    socket.on('join', async username => {

        await userModel.findOneAndUpdate({
            username
        }, {
            socketId: socket.id
        })

    })

});
// end of socket.io logic

/* 
socket - single user/browser
io- server
emit - send
on - receive
 */

module.exports = socketapi;