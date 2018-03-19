function kick(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
    if(message.content.startsWith(prefix + 'kick')){
        // ---- Les droits necessaire à la commande ---- //
        let myrole = message.guild.member(client.user).hasPermission("KICK_MEMBERS"); //recuperer les droits necessaire du bot
        let yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS"); //recuperer les droits necessaire du membre
        var logs =  message.guild.channels.find('name', 'kick_logs');
        //if (!message.guild.channels.exists('name', 'private_logs')) {return message.channel.sendMessage("Please create the channel named **private_logs**")}
        var bienv =  message.guild.channels.find('name', 'bienvenue');
        // ---- Pour les malins ---- //
        var report = message.member.id;
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        if(message.author.id != "385823525388419073"){
            if(!yourole){
                return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande **kick**!");
            }
        }else{
            console.log("Permission aquises!");
        }

         if(!message.mentions.users.first()) {return message.channel.send({
            embed:{
                title : "Gestion des bans/kicks",
                color : coloration[p],
                fields:[{
                    name : '_ _',
                    value : '_ _'
                },{
                    name : "La commande est : **"+prefix+"kick + @mention + <raison>**",
                    value : "_ _"
                }]
            }
        })}
        /*if(!message.mentions.users.first()) return message.channel.send("La commande est : "+prefix+"kick + @mention + <raison>");*/
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        if(!reason) reason = "Moderator: "+message.author.tag;
        if(!message.guild.members.get(member.id).kickable) return message.channel.send("L'utilisateur ne peut etre kick");

        var r = "Moderator: "+message.author.tag+", reason:"+reason;
        message.guild.members.get(member.id).kick(reason).then(user => {
            user.sendMessage("Tu viens d'être kick du serveur : "+message.guild.name+" , par l'utilisateur : "+ message.author.tag +"pour le motif suivant : "+reason)
          }).catch(err => {
            message.channel.send(":x:`ERROR`:x:");
            return;
          })


        const embed = new Discord.RichEmbed()
        .setColor(coloration[p])
        .setThumbnail(client.user.avatarURL)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription("Information de la commande Kick :")
        .addField("🌐 Serveur **:** ", "" + message.guild.name, true)
        .addField("🆔 Id du serveur **:** ", "" + message.guild.id, true)
        .addField("💺 Salon **:** ", "" + message.channel.name, true)
        .addField("🆔 Id du salon **:** ", "" + message.channel.id, true)
        .addField("🏆 Modérateur **:** ", "" + message.author.tag, true)
        .addField("🏆 Reason **:** ", "" + reason, true)
        .addField("🏆 Kicked **:** ", "" + member.tag, true)
        .addField("🆔 ID : ", "" + member.id, true)
        .setTimestamp()
        .setFooter("🚨  Fondateur du bot Cosmoslight", "https://cdn.discordapp.com/avatars/385823525388419073/7d98c5e8b3c89b6852346e9e6eaba1cb.jpg?size=128")
   
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        var m = client.guilds.get("310516780198264853").channels.get("421641754337345536")
        m.send({embed});
        message.channel.send({embed})
    }
    
}

module.exports = kick;