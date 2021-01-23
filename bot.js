const http = require('http');
const express = require('express');
const app = express();
const timezone = require('moment-timezone')
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
  console.log('Joined')
 
   function botStatus() {
   
     let waktu =  client.channels.find('id', '674321908635926559')
waktu.setName(`${timezone().tz("Asia/Jakarta").format(" ➲ HH:mm [WIB]") + " "}`)
let waktu1 =  client.channels.find('id', '802503884433784872')
waktu1.setName(`${timezone().tz("Asia/Jakarta").format(" ➲ HH:mm [WIT]") + " "}`)
let waktu2 =  client.channels.find('id', '802503880897724426')
waktu2.setName(`${timezone().tz("Asia/Jakarta").format(" ➲ HH:mm [WITA]") + " "}`)
 }; setInterval(botStatus, 10000)
  client.user.setActivity('X-NIGHT | Alfaris.272', { type: 'PLAYING' });
	 
});

client.login(process.env.TOKEN);
