const Discord = require("discord.js");

const botconfig = require("../botconfig.json");

const red = botconfig.red;

const green = botconfig.green;

const orange = botconfig.orange;

const errors = require("../utils/errors.js");

    let username = args.slice(1).join("");
    let uid = message.author.id;

    message.channel.send("Working, please wait.").then(msg => {
      // make request to api and get link code
      let url = "https://verify.eryn.io/api/user/${this.id}";
      request(url, (err, resp, body) => {
        if (!err && (resp.statusCode == 302 || resp.statusCode == 200)) {
          let j = JSON.parse(body);
          if (!j["ok"])
            return msg.edit("Did you pass your username as an argument? e.g a!link USERNAME");
          if (j["isLinked"]) {
            msg.edit("Your Discord account is already linked to AppX!");
          } else {
            msg.edit(
              "I am going to DM you a list of instructions on how to link your account!"
            );
            message.author
              .createDM()
              .then(dm => {
                dm.send(
                  `In order to link your account please go to the **AppX Dashboard** then click on **My Account -> Account Linking**. Enter the following code in the *Link Code* box: \`${
                    j["linkCode"]
                  }\` Then press *Link*!`
                );
              })
              .catch(() => {
                msg.edit(
                  "I can't DM you! Have you blocked me or closed/disabled your DMs?"
                );
              });
          }
        } else {
          msg.edit("Unable to make request to AppX API!");
          console.log(resp.statusCode);
    }

module.exports.help = {

  name: "link"

}
