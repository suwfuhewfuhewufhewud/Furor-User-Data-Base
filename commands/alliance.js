const { RichEmbed } = require("discord.js");



module.exports = {

    name: "report",

    category: "moderation",

    description: "Reports a member",

    usage: "<mention, id>",

    run: async (client, message, args) => {

        if (message.deletable) message.delete();

        if (!args[1])

            return message.channel.send("Please provide a reason for the report").then(m => m.delete(5000));

        

        const channel = message.guild.channels.find(c => c.name === "ally-announcements")

            

        if (!channel)

            return message.channel.send("Couldn't find a `#reports` channel").then(m => m.delete(5000));



        const embed = new RichEmbed()

            .setColor("#ff0000")

            .setTitle("NEW ALLIANCE")

            .setTimestamp()

            .setFooter(message.guild.name, message.guild.iconURL)

            .addField(`**Group Link** ${args.slice(1).join(" ")}`);



        return channel.send(embed);

    }

}

module.exports.help = {

    name: "alliance"
  
  }
