const { Client, RichEmbed } = require('discord.js');

const client = new Client();
const prefix = '?sky';

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity("SkyForge");
});
client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "login")) {
    
  }
});

client.login('NjY1NjA5ODQzNDE5MTE5NjIz.XhoIEA.gfLSvBKKVMAzd-EL_JCfAbfhdvA');