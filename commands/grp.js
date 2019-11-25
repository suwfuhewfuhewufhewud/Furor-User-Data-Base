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
    let rreason = args.join(" ").slice(0);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()

    .setTitle("A GRP SESSION HAS BEEN SCHEDULED!")

    .setColor()

    .setDescription("There is a GRP Session scheduled, and we'd like you to join us! Another announcement will be made when the shift has commenced;")

    .addField("**SCHEDULED AT**", rreason)

    .addField("**HOST**", message.author)

    .addField("**STATUS**", "Open");



     message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "grp"

}
