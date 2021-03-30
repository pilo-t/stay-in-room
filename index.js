// Devlop by: 3MAR || Version: 1.0.0
const Discord = require("discord.js");
const bot = new Discord.Client();
const { token } = require("./token")

bot.on("ready", async() => {
    console.log(`Ready`);
    setInterval(() => {
        const channel = bot.channels.get("778906324179091467");
        if (!channel) return console.error("I can't find this channel!");
        channel
          .join()
          .then(con => {
            console.log("Working!");
          })
          .catch(e => {
            console.error(e);
          });
      }, 3000);
});

bot.login(token);
// Devlop by: 3MAR || Version: 1.0.0