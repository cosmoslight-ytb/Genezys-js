function gban(message, prefix, client, coloration, p){

    if(message.content.startsWith(prefix+"gban")){
        message.delete(message)
        let myrole = message.guild.member(client.user).hasPermission("BAN_MEMBERS"); //recuperer les droits necessaire
        
        var report = message.member.id;


        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        
        if(message.author.id != "385823525388419073" && message.author.id != "287276997355503618"){return;}

        id = message.mentions.users.first().id || message.args[2] || false
        if(!id || id == false) return;
        if (!client.guilds.get('422482911011274763')) return;
        if (!client.guilds.get('422482911011274763').channels) return;
        if (!client.guilds.get('422482911011274763').channels.get(id)) {
            client.guilds.get('422482911011274763').createChannel(id, "text")
            }
        
}
}
module.exports = gban;