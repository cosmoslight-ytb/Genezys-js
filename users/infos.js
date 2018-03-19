 function infos(message, prefix, client, client_info, coloration, p){
    const mention = client_info.mention;
  const client_id = client_info.client_id;
  const name = client_info.name;
const moment = require('moment');
const os = require('os');
const bot = client;
const Discord = require('discord.js')

if (message.content == (prefix + "userinfo") || message.content == (prefix + "uinfo")) {
        var auteur = message.mentions.users.first();
        if(!auteur){
            var menti = message.author;
        }
        else{
            var menti = auteur;
        }
        var ligne = menti.presence.status;
        if(ligne == "online"){
            var etat = "En Ligne";
        } else if (ligne == "offline"){
            var etat = "Hors Ligne";
        } else if (ligne == "idle"){
            var etat = "Absent";
        } else if(ligne == "dnd"){
            var etat = "Ne pas déranger";
        }

        if(!menti.presence.game){
            var game = "Rien";
        } else {
            var game = menti.presence.game.name;
        }
         if (menti.bot == true) {
            var checkbot = ":white_check_mark: Vous êtes un Bot ";
        } else {
            var checkbot = ":x: Vous n'êtes pas un Bot ";
        }
            var date = ((menti.id / 4194304) + 1420070400000);
            var mydate = new Date(date);
            var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"][mydate.getMonth()];
            var jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"][mydate.getDay()];
            var createAtbyHTY =  jour + ' ' + mydate.getDate() + ' ' + mois + ' ' + mydate.getFullYear() + ' à ' + mydate.getHours() + 'h' + mydate.getMinutes() + ' & ' + mydate.getSeconds() + 's';
            let roles = message.guild.members.get(menti.id).roles.size - 1
        message.channel.send({
            embed:{
                fields:[{
                    name : 'Gestion des Joueurs',
                    value : '_ _',
                    inline : true
                },{
                    name : '_ _',
                    value : '_ _',
                    inline : true
                },{
                    name : 'Pseudo',
                    value : '[' + menti.username + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name : 'Discriminant',
                    value : '[' + menti.discriminator + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name : 'Etats',
                    value : '[' + etat + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name : 'Joue à',
                    value : '[' + game + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name : 'Mention :',
                    value : '[' + menti.tag + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name : 'Id :',
                    value : '[' + menti.id + '](https://discord.gg/5PcPx3b)',
                    inline : true
                },{
                    name: "Roles : ",
                    value: '[' + roles + '](https://discord.gg/5PcPx3b)',
                    inline: true
                },{
                    name: "Bot ? :",
                    value: '[' +checkbot + '](https://discord.gg/5PcPx3b)',
                    inline: true
                },{
                    name : 'Inscrit le',
                    value : '[' + createAtbyHTY + '](https://discord.gg/5PcPx3b)',
                    inline : true
                }],
                thumbnail:{
                    url : menti.avatarURL
                },
                footer:{
                    text : "Crée par Cosmoslight",
                    icon_url : client.user.avatarURL
                }
            }
        })
    }
    if (message.content == (prefix + "serverinfo") || message.content == (prefix + "si")) {
        var guild = message.guild;
        var server = message.guild;
        var serveravatar = guild.iconURL;
        var servername = guild.name;

        var roles = guild.roles.array().map(g => g.name).join(', ');
        var channels = guild.channels.array().map(g => g.name).join(', ');
        var users = guild.members.array().filter(c => c.user.bot == true);
       var userB = users.length;

       
       
        
        const embed = new Discord.RichEmbed()
        .setTitle("Informations sur le serveur")
        .setAuthor(servername, serveravatar)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(coloration[p])
        .setThumbnail(serveravatar)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("")
        .addField("🏆 Nom du serveur :", guild.name, true)
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("🆔 ID : ", guild.id, true)
        //.addField("👑 Owner : ", "<@" + guild.owner.id + ">"+" | (ID:"+guild.owner.id+")", true)
        .addField("👑 Owner : ", "<@" + guild.owner.id + ">", true)
        .addField("🆔 ID Owner : ", guild.owner.id, true)
        .addField("🌐 Region : ", server.region, true)
        .addField("💳 Role : ", guild.roles.size, true) 
        .addField("__**💺  Channels**__ **:**", guild.channels.size, true)
        .addField("📃 Membres :", guild.members.size, true)
        .addField(":busts_in_silhouette: Humain :", guild.members.size-userB, true)
        .addField(":robot: bot :", userB, true)
        .addField("Channels", guild.channels.size, true)
        .addField("Roles", guild.roles.size, true)
        
        /*
         * Blank field, useful to create some space.
         */
        
        .setFooter('by Cosmoslight', message.author.avatarURL)
        .addBlankField(true)
        
        message.channel.send({embed});
        
    }
    if(message.content == (prefix+"botinfo") || message.content == (prefix+"bi")){
    let avatar = client.user.avatarURL
    var CDiscriminator = client.user.discriminator;

    const embed = new Discord.RichEmbed()
    .setTitle("Informations sur le bot")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(coloration[p])
    .setDescription("")
    .setImage("")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setURL("")
    .addField("🏆 Nom du Bot : ", client.user.username, true)
    .addField("🆔 ID du Bot : ", client.user.id, true)
    .addField("👑 Créateur du bot : ", "<@385823525388419073>", true)
    .addField("🆔 ID du créateur : ", "385823525388419073", true)
    .addField("🌐 Serveurs : ", client.guilds.size, true)
    .addField("📃 Utilisateurs :", client.users.size, true)
    .addField("🎇 Serveur du créateur : ", "https://discord.gg/5PcPx3b", true)
    .setFooter("© by Cosmoslight ", "https://cdn.discordapp.com/avatars/385823525388419073/7d98c5e8b3c89b6852346e9e6eaba1cb.jpg?size=128")
    .addBlankField(true)
    .addField("💳 Lien d'invitation du bot : ", "https://discordapp.com/oauth2/authorize?client_id=385828184534286336&scope=bot&permissions=2146958591", false);
    
    message.channel.send({embed});
  }
}
module.exports = infos;