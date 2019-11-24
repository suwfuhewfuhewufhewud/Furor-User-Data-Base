
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

    .setTitle("A SHIFT HAS BEEN SCHEDULED!")

    .setColor()

    .setDescription("There is a shift scheduled, and we'd like you to join us! Another announcement will be made when the shift has commenced;")

    .addField("**SCHEDULED AT**", message.createdAt)

    .addField("**HOST**", message.author)

    .addField("**STATUS**", "Open");



     message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "shift"

}
