
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

    .setTitle("A SHIFT HAS BEEN SCHEDULED!")

    .setColor()

    .setDescription("There is a shift whitch recently commanced! Feel free to join the Bakery with some of your friends and enjoy a Cupcake with the rest of our community!")

    .addField("**SCHEDULED AT**", rreason)

    .addField("**HOST**", message.author)

    .addField("**STATUS**", "Open");



     message.channel.send(reportEmbed);



}



module.exports.help = {

  name: "shift"

}
