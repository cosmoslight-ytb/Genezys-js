function bingo(message, prefix, client, configs){
    if(message.channel.type == "dm"){return;}
    function nb_aleatoire(){
        n= Math.floor((Math.random() * 100) + 1);
        return n
    }
    if(!configs.has(message.guild.id)) {
        configs.set(message.guild.id, {
            nb: 1200
        })
    }
    const conf = configs.get(message.guild.id);
    
    if(message.content == (prefix+"bingo")){
        if(!configs.has(message.guild.id)) {
            configs.set(message.guild.id, {
                nb: 1200
            })
        }
        var n = nb_aleatoire();
        conf.nb = n;
        configs.set(message.guild.id, conf);
        message.channel.send("Bingo, le nombre est entre 0 et 100")
        message.author.send("Le nombre du bingo est "+conf.nb)
    }
    
    v=Number(parseInt(message.content));
    if(typeof(conf.nb) !== 'undefinied'){
    if(conf.nb != 1200){
    if(v == conf.nb){
        if(conf.nb == 1200){return;}
        message.channel.send("Le bingo à été remporté par **<@"+message.author.id+">**");
        conf.nb = 1200;
        configs.set(message.guild.id, conf);
    
    }}}
    }
    
    module.exports = bingo;