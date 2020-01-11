const { Client, RichEmbed } = require('discord.js');
const axios = require("axios");
const client = new Client();
const prefix = '?sky';

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity("SkyForge");
});
client.on("message", async (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "login")) {
    let get_user = async () => {
      let response = await axios.get(`https://godsofskyforge.bubbleapps.io/version-test/api/1.1/obj
/User?Username=${args[0]}&email=${args[1]}`)
      let user = response.data
      return user
    }
    let userValue = await get_user()
    console.log(userValue)
  }
});

client.login('NjY1NjA5ODQzNDE5MTE5NjIz.XhoIEA.gfLSvBKKVMAzd-EL_JCfAbfhdvA');