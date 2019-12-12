const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654455728144384006")
setInterval(function() {
channel.send(`dark dark`);
}, 30)
})

client.login(process.env.BOT_TOKEN);