
const Discord = require("discord.js");

const botconfig = require("../botconfig.json");

const red = botconfig.red;

const green = botconfig.green;

const orange = botconfig.orange;

const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {

    message.delete();

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



    let reportschannel = message.guild.channels.find(`name`, "session-notifications");

    if(!reportschannel) return message.channel.send("Couldn't find sessions channel.");

    reportschannel.send(reportEmbed);



}



module.exports.help = {

  name: "commenced"

}
