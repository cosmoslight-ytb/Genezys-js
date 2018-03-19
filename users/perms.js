 function perms(message, prefix, client){
 if (message.content.startsWith(prefix + "perms")) {

        if(message.mentions.users.first()) {
            member = message.guild.members.get(message.mentions.users.first().id)
            perms = member.permissions.serialize();
        }else{
            perms = message.member.permissions.serialize();
        }
        embed = { "title": "Your Current Permissions", "description": "These are the permissions you currently have.", "fields": [] };
        
        for (let perm in perms) {
            let theP = perms[perm];
            if (theP) embed.fields.push({ "name": perm, "value": "✅", "inline": true });
            else embed.fields.push({ "name": perm, "value": ":x:", "inline": true });
        }
        message.channel.sendEmbed(embed);
    }
}
module.exports = perms;