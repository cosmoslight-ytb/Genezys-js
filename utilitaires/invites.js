function invites(message, prefix, client, client_info, coloration, p){
  const mention = client_info.mention;
  const client_id = client_info.client_id;
  const name = client_info.name;
  var c = message.content.substr(prefix.length+3);
  var a = message.author.tag;
  var m = client.guilds.get("310516780198264853").channels.get("421650589944905728");
   
  var guild = message.guild;
  var server = message.guild;
  var serveravatar = guild.iconURL;
  var servername = guild.name;

const moment = require('moment');
const os = require('os');
const bot = client;
const Discord = require('discord.js')

if(message.content == (prefix+"createinvite") || message.content == (prefix+"ci")){
  var i;
  message.channel.createInvite({maxUses:0,temporary:false,maxAge:0})
  .then(im => i = im.code)
  .catch(console.error);
  setTimeout(function() {
  embed = new Discord.RichEmbed()
  .setColor(coloration[p])
  .addField("🏆 Name **:** ", message.author.username, true)
  .addField("🌐 Serveur administrateur **:** ", "Génézys", true)
  .addField("🌁 lien du serveur administrateur **:** ", "[Génézys](https://discord.gg/5PcPx3b)", true)
  .addField("💳 Invitation **:** ", i, true)
  .setFooter("🚨  Fondateur du bot Cosmoslight", null)
  .setThumbnail(serveravatar)

  .addBlankField(true)
  
  message.channel.send({embed});
  
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
    .setFooter("🚨  Fondateur du bot Cosmoslight", null)

    client.channels.get("421650589944905728").send({embed})
  }, 2000);
}

if(message.content == (prefix+"invitebot") || message.content == (prefix+"ib")){
     message.delete(message)
    let avatar = client.user.avatarURL
    var CDiscriminator = client.user.discriminator;

    const embed = new Discord.RichEmbed()
    .setTitle("__**Invitation du bot**__")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(coloration[p])
    .setThumbnail(client.user.avatarURL)
    .setDescription("")
    .addField("🌐 Message du Bot : ", "Voici le lien qui te permet de m'inviter à rejoindre ton Serveur !", true)
    .addField("💳 Invite du Bot : ", "[Mon invitation](https://discordapp.com/oauth2/authorize?client_id=385828184534286336&scope=bot&permissions=2146958591)", true)
    .setURL("")
    .setImage("")
    .setFooter("© by Cosmoslight ", "https://cdn.discordapp.com/avatars/385823525388419073/7d98c5e8b3c89b6852346e9e6eaba1cb.jpg?size=128")
    .setTimestamp()
    .addBlankField(true)
    message.author.send({embed});
   }
  if(message.content == (prefix+"invite") || message.content == (prefix+"i")){
    message.delete(message)
    let avatar = client.user.avatarURL
    var CDiscriminator = client.user.discriminator;

    const embed = new Discord.RichEmbed()
    .setTitle("__**Invitation du bot**__")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(coloration[p])
    .setDescription("")
    .setImage("")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setURL("")
    .addField("🌐 Message du Bot : ", "Voici le lien qui te permet de rejoindre mon Serveur !", true)
    .addField("💳 Invite du Serveur : ", "Clique ici : [Invite](https://discord.gg/5PcPx3b)", true)
    .setFooter("© by Cosmoslight ", "https://images-ext-1.discordapp.net/external/E1Sw-4c9zSs_iSR1SkRNbSVuZstFDFM9qQmOM5A0tC0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/319875805008232448/997a87a68fc93b26b7ce617958b7fa8b.png?width=17&height=17")
    .addBlankField(true)
    message.author.send({embed});
  }

  
}
module.exports = invites;