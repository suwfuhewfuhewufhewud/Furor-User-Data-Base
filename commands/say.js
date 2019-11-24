const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");
    let reportschannel = message.guild.channels.find(`name`, "announcements");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
