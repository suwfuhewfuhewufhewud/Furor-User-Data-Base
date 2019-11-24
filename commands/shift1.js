
const Discord = require("discord.js");
3
​
4
const botconfig = require("../botconfig.json");
5
​
6
const red = botconfig.red;
7
​
8
const green = botconfig.green;
9
​
10
const orange = botconfig.orange;
11
​
12
const errors = require("../utils/errors.js");
13
​
14
​
15
​
16
module.exports.run = async (bot, message, args) => {
17
​
18
    message.delete();
19
​
20
    if(args[0] == "help"){

      message.reply("Usage: !report <user> <reason>");

      return;

    }

    let reportEmbed = new Discord.RichEmbed()

    .setTitle("A SHIFT HAS NOW COMMENCED!")

    .setColor()
    .setDescription("There is a shift whitch recently commanced! Feel free to join the cafe with some of your friends and enjoy a refreshing Boba Tea with the rest of our community!")

    .addField("**HOST**", message.author)

    .addField("**STATUS**", "Open");

     message.channel.send(reportEmbed);

module.exports.help = {

  name: "commenced"
}
