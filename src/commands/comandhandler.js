const helloHandler = require('./hello');
const gifHandler = require("./gifs")

const commandHandler = async (message) => {
    if(message.content === 'да'){
        helloHandler(message)
    }
    if(message.content === '!gif'){
        gifHandler(message)
    }
}

module.exports = commandHandler