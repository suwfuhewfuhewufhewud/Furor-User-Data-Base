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

    .setTitle("ALLIANCE ANNOUNCEMENT")

    .setColor()

    .setDescription("Hello everyone! Our fellow Alliance Fruor is having their Grand Opening! Please join via the link down below!")

    .addField("**LINK**", "https://web.roblox.com/games/1061414636/Fruor-Cafe-V-1");



     message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "fruor"

}
