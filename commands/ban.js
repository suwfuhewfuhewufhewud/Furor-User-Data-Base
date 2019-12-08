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

    .setTitle("ADVERTISEMENT DECLINED")
    
    .setDescription("rreason");



      let reportschannel = message.guild.channels.find(`name`, "chat");



}



module.exports.help = {

  name: "decline"

}
