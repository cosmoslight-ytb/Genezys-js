function sets(message, prefix, client, coloration, p){
    if(message.content.startsWith(prefix+"setgame") || message.content.startsWith(prefix+"setGame")){
        if(message.author.id != "385823525388419073"){return message.reply("You don't have the permission to do that!")}
        var args = message.content.split(" ");
        args.shift(); // enleve !setgame ou !setGame
        var nGame = args.join(" ");
        client.user.setGame(nGame,'https://www.twitch.tv/xtheinfinity974x');
        message.channel.send("Jeu changé en **_"+nGame+"_**")
    }
    if(message.content.startsWith(prefix+"setname") || message.content.startsWith(prefix+"setName")){
        if(message.author.id != "385823525388419073"){return message.reply("You don't have the permission to do that!")}
        var args = message.content.split(" ");
        args.shift(); // enleve !setgamename ou !setName
        var nName = args.join(" ");
        client.user.setUsername(nName);
        message.channel.send("Nom changé en **_"+nName+"_**")
    }
}

module.exports = sets;