if (message.content.startsWith("a!link")) {
    if (!message.member.roles.some(r => ["- | Noted Customer"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

    let username = args.slice(1).join("");
    let uid = message.author.id;

    message.channel.send("Working, please wait.").then(msg => {
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
      });
    });
  }

module.exports.help = {

  name: "link"

}
