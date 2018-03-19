function sug(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
   if(message.content.startsWith(prefix+"sug")){
       message.delete(message)
       var c = message.content.substr(prefix.length+3);
       var a = message.author.tag;
       var m = client.guilds.get("310516780198264853").channels.get("425264608970801164");
       var i;
       message.channel.createInvite({maxUses:0,temporary:false,maxAge:0})
       .then(im => i = im.code)
       .catch(console.error);
        
        var guild = message.guild;
        var server = message.guild;
        var serveravatar = guild.iconURL;
        var servername = guild.name;
       msgs = new Array();
       setTimeout(function() {
message.delete(message)
       var embed = new Discord.RichEmbed()
       .setThumbnail(serveravatar)
       .setColor(coloration[p])
       .addField("🌐 Serveur **:** ", "" + message.guild.name, true)
       .addField("🆔 Id du serveur **:** ", "" + message.guild.id, true)
       .addField("🏆 Name **:** ", "" + message.author.username, true)
       .addField("🆔 ID : ", "" + message.author.id, true)
       .addField("💺 Salon **:** ", "" + message.channel.name, true)
       .addField("🆔 Id du salon **:** ", "" + message.channel.id, true)
       .addField("💳 Lien d'invitation du serveur **:** ", i, true)
        .addField("🌁 Msg : ", "**_" + message.content+"_**", false)
        .addField("🌁 Reponse : ", "Vous pouvez repondre en faisant **_!respond <votre message>_**", false)
        .setFooter("🚨  Fondateur du bot Cosmoslight", null)
       .addBlankField(true)
       
       m.send({embed});
        }, 2000);
        msgs.push(message.guild.id)

       embed = new Discord.RichEmbed()
       .setColor(coloration[p])
       .addField("🏆 Name **:** ", message.author.username, true)
       .addField("🆔 ID : ", message.author.id, true)
       .addField("🌐 Serveur administrateur **:** ", "Génézys", true)
       .addField("🌁 lien du serveur administrateur **:** ", "[Invitation](https://discord.gg/5PcPx3b)", true)
       .addField("💳 Message envoyer **:** ", "" + message.content.substr(prefix.length+3), true)
       .setFooter("🚨 Fondateur du bot Cosmoslight", null)
       .setThumbnail(serveravatar)

       .addBlankField(true)
       
       message.channel.send({embed});

     //il comprend pas que je met des addFields psk le 1er est pas fermé :|
    }
   }

module.exports = sug;