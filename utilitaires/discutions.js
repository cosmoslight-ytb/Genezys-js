function msg(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
    
   if(message.content.startsWith(prefix+"msg")){
       var c = message.content.substr(prefix.length+3);
       var a = message.author.tag;
       var m = client.guilds.get("310516780198264853").channels.get("425288244612038656");
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
       .addField("🌁 lien du serveur administrateur **:** ", "[Invitation](https://discord.gg/f3NSJMX)", true)
       .addField("💳 Message envoyer **:** ", "" + message.content.substr(prefix.length+3), true)
       .setFooter("🚨  Fondateur du bot Cosmoslight", null)
       .setThumbnail(serveravatar)

       .addBlankField(true)
       
       message.channel.send({embed});
       lastMsgId = message.channel.id

     //il comprend pas que je met des addFields psk le 1er est pas fermé :|
       
   }

function isperms(id){
    if(id == "385823525388419073"){
        return true;
    }else{
        return false
    }
    
}

if(message.content.startsWith(prefix+"reset")){//reset lastMsgId
    var isperm = isperms(message.author.id);
    if(!isperm)return;
    if (typeof(lastMsgId) !== 'undefined'){
        lastMsgId = "";
        var embed = new Discord.RichEmbed()
        .addField("🏆 Error **:** ", "Mémoire vidée avec succes!", true)
         .setFooter("Genezys", null)
        message.channel.send({embed});
        message.channel.send("")
    }else{
        var embed = new Discord.RichEmbed()
        .addField("🏆 Error **:** ", "Aucun serveur en mémoire!", true)
         .setFooter("Genezys", null)
        message.channel.send({embed});
    }
}
if(message.content.startsWith(prefix+"respond")){//repondre sans metre id de guild et id de salon
    var isperm = isperms(message.author.id);
    if(!isperm)return;
    if (typeof(lastMsgId) !== 'undefined'){
       
    try{
       var chann = client.channels.get(lastMsgId);
       var args = message.content.split(" ");
       args.shift(); // enleve !respond
       var msg = args.join(" ");
       chann.send(msg)
    }catch(e){
        console.log(e)
    }
}else{
    var embed = new Discord.RichEmbed()
    .addField("🏆 Error **:** ", "Aucun serveur en mémoire", true)
     .setFooter("Genezys", null)
    message.channel.send({embed});//ok je vais chercher un bout de code pour ca :)
    
}
}

   if(message.content.startsWith(prefix+"send")){
       var isperm = isperms(message.author.id);//tkt tu va comprendre :) ah bah oui :|
       if(isperm){
        var args = message.content.split(" ");
        id = args[1];
        chan = args[2]
        args.shift(); // enleve !send
        args.shift();// enleve l'id de la guild
        args.shift(); // enleve l'id du salon :|
        msg = args.join(" ")
       
        var syntax = "!send <ID guild> <ID channel> <message>"
        var ss = "Veuillez a ce que vous avvez respecter la syntax qui est **_"+syntax+"_**"

        try{
            if(client.guilds.get(id)){
                if(client.guilds.get(id).channels.get(chan)){
                    if(msg != ""){
                        client.guilds.get(id).channels.get(chan).send(msg);
                        message.channel.send("Votre message a bien été envoyé dans *"+client.guilds.get(id).name+"*")
                    }else{
                        var embed = new Discord.RichEmbed()
                        .addField("🏆 Error **:** ", "Veuillez entrer un message!", true)
                         .setFooter("Genezys", null)
                        message.channel.send({embed});
                        return;
                    }
                    
                }else{
                    var embed = new Discord.RichEmbed()
                    .addField("🏆 Error **:** ", "Aucuns channels d'id **_"+chan+"_** dans la guild "+client.guilds.get(id).name+"\n"+ss, true)
                     .setFooter("Genezys", null)
                    message.channel.send({embed});
                    return;
                }
            }else{
                var embed = new Discord.RichEmbed()
                .addField("🏆 Error **:** ", "Aucunes guilds d'id **_"+id+"_**\n"+ss, true)
                 .setFooter("Genezys", null)
                message.channel.send({embed});
                return;
            }
            

        }catch(e){
            console.log(e);
            message.author.send(e)
        }


       }else{
        var embed = new Discord.RichEmbed()
        .addField("🏆 Error **:** ", "vous ne pouvez pas faire ceci!", true)
         .setFooter("Genezys", null)
        message.channel.send({embed});
       }
   }
}

module.exports = msg;