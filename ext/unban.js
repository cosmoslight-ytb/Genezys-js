
function unban(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
    const ce = require("embed-creator");
    
    if(message.content.startsWith(prefix + 'unban')){
        // ---- Les droits necessaire à la commande ---- //
        let myrole = message.guild.member(client.user).hasPermission("BAN_MEMBERS"); //recuperer les droits necessaire du bot
        let yourole = message.guild.member(message.author).hasPermission("BAN_MEMBERS"); //recuperer les droits necessaire du membre
        var logs =  message.guild.channels.find('name', 'bans_logs');
        //if (!message.guild.channels.exists('name', 'private_logs')) {return message.channel.sendMessage("Please create the channel named **private_logs**")}
        var bienv =  message.guild.channels.find('name', 'bienvenue');
        // ---- Pour les malins ---- //
        var report = message.member.id;
             // ---- Pour les petits malins ---- //
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        if(message.author.id != "385823525388419073"){
            if(!yourole){
                return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande **ban**!");
            }
        }else{
            console.log("Permission aquises!");
        }
        
        var args = message.content.split(" ");
        id = args[1]
        var guild = message.guild;

        var reason = "Moderator: "+message.author.tag

 guild.unban(id, reason)
     .then(user => message.channel.send(`Unbanned ${user.tag} from ${guild.name}`))
     .catch(err => {
         console.error;
         message.channel.send("An error has occured when trying to unban this user!")
     });
    }
}
module.exports = unban;