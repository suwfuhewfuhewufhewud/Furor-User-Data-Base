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

    .setTitle("A GRP SESSION HAS COMMENCED!")

    .setColor()

    .setDescription("There is a GRP Session that has recently commenced! Sorry if you couldn't make it.")

    .addField("**HOST**", message.author)

    .addField("**STATUS**", "Commenced");



     message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "gcommenced"

}
