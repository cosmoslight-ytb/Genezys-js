 function clear(message, prefix, client, coloration, p){
    const owner_id = 385823525388419073;
if (message.content.startsWith(prefix + 'clear')) {
    try {
    message.delete(message)
    
            // ---- Les droits necessaire à la commande ---- //
        let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
        let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
        // ---- Pour les petits malins ---- //
        if(!myrole){
            return message.author.send("Je n'ai pas les permissions nécessaires pour executer la commande clear dans le serveur : "+message.guild.name);
        }
         if (message.author.id == owner_id) {
            var nombre = Number(parseInt(message.content.substr(prefix.length+6)));
        if(nombre < 2 || nombre > 101){
            return message.reply("Valeur éronné, choisissez entre 2 et 100");
        }
        if (!nombre) {return message.reply(":x:Error:x:")}
        message.channel.bulkDelete(nombre+1)
        message.channel.send('Suppression de ' + nombre + ' messages').then(sent => {//HEIN???????????????????
            setTimeout(function() {sent.delete()}, 5000);
            
        })
        return;
        }
         
        if(!yourole){
            return message.author.send("Vous n'avez pas les permissions nécessaires, pour executer la commande *clear*!");
        }
        
        // ---- je récupere la valeur ---- //
        var nombre = Number(parseInt(message.content.substr(prefix.length+6)));
        if (!nombre) {return message.reply(":x:Error:x:")}
        if(nombre < 2 || nombre > 101){
            return message.reply("Valeur éronné, choisissez entre 2 et 100");
        }
                message.channel.bulkDelete(nombre)
                message.channel.send('Suppression de ' + nombre + ' messages').then(sent => {//HEIN???????????????????
                    setTimeout(function() {sent.delete()}, 5000);
                    
                })
        message.delete(message)
        ;//et la :) psk en haut c'est si c'est toi qui met et la c'est si c'est un user au hazard parmi 
        }catch(err) {
            console.log(err)
        }
    }
}
module.exports = clear;