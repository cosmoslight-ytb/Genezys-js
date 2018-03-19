function salons(message, prefix, client, coloration, p){
    function createChannel(name, type, guild){
    try{
        guild = client.guilds.get(guild)
        guild.createChannel(name, type)
        .then(channel => console.log(`Created new channel ${channel}`))
        .catch(console.error);
    }catch (error){
    console.log(error)
    } 
    
    }
    function createChannels(name, type, guild, count){
        
            for (var i = 0; i < count; i++) {
                try{
                    guild = client.guilds.get(guild)
                    guild.createChannel(name, type)
                    .then(channel => console.log(`Created new channel ${channel}`))
                    .catch(console.error);
                }catch (error){
                console.log(error)
                } 
            }
            
       
        
        }
        if(message.content.startsWith(prefix+"textchannel")){//un seul salon text a la fois 
            message.delete(message)
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        if(!yourole){
            return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande **textchannel / tc**!");
        }
        nChannel = message.content.substr(prefix.length+2)//Andouille :|
        createChannel(nChannel, "text", message.guild.id)
        message.channel.send(`Channel was created`) //!tc test
    }



    if(message.content.startsWith(prefix+"tcs")){//plusieurs a la fois
        message.delete(message)
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        
        if(message.author.id != "385823525388419073" && message.author.id != "287193053603823617"){return;}
        
        var args = message.content.split(" ");
        var nb = args[1];
        args.shift(); // enleve !newstext
        args.shift(); // enleve le nombre :)
        var nChannel = args.join(" ");
        var count = Number(parseInt(nb))
        for (var i = 0; i < count; i++) {
            createChannel(nChannel, "text", message.guild.id)
        }
        message.channel.send(`Channel was created`)//!ntc 5 test
    }


    if(message.content.startsWith(prefix+"vocalchannel")){//un seul a la fois s 
        message.delete(message)
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        if(!yourole){
            return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande **vocalchannel / vc**!");
        }
        nChannel = message.content.substr(prefix.length+12)
        createChannel(nChannel, "voice", message.guild.id)
        message.channel.send(`Channel was created`)//because i'm english :)
    }



    if(message.content.startsWith(prefix+"vcs")){//plusieurs a la fois 
        message.delete(message)
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"); //recuperer les droits necessaire
        
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires.");
        }
        if(!yourole){
            return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande *ban*!");
        }
        if(message.author.id != "385823525388419073" && message.author.id != "287193053603823617"){return;}
        
        var args = message.content.split(" ");
        var nb = args[1];
        args.shift(); // enleve !newsvoice
        args.shift(); // enleve le nombre :)
        var nChannel = args.join(" ");
        var count = Number(parseInt(nb))
        for (var i = 0; i < count; i++) {
            createChannel(nChannel, "voice", message.guild.id)
        }
        message.channel.send(`Channel was created`)//!vc 5 test
    }
}
module.exports = salons;