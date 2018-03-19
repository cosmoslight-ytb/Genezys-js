const Discord = require("discord.js");
const client = new Discord.Client();

const token = "Mzg1ODI5MDYyNTE1MzU5NzQ0.DYOMKA.LxOPYMQNwwHGiw_IfPWHxOqNLMc";
var prefix = "$";
var memberCount = client.users.size;
var servercount = client.guilds.size;
const con = console.log;
const ce = require("embed-creator");

const colors = require("./colors.js");
colors(client, "genezys");

const set = require("./Admin/set.js");
const god = require("./Admin/god.js");
const gban = require("./Admin/gban.js");

const ban = require("./ext/ban.js")
const kick = require("./ext/kick.js")
const clear = require("./ext/clear.js")
const unban = require("./ext/unban.js")

const infos = require("./users/infos.js")
const help = require("./users/help.js")

const salons = require("./guild/salons.js")

const invites = require("./utilitaires/invites.js")
const msg = require("./utilitaires/discutions.js")
const sug = require("./utilitaires/sug.js");

const bingo = require("./fun/bingo.js");
const ping = require("./fun/ping.js")
const sizes = 20;
const coloration = new Array(sizes);
var position = 0;
for (var i=0; i<sizes; i++) {
    var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
    var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
    var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
  
    coloration[i] = '#'+ red + green + blue;
  }

  function sin_to_hex(i, phase) {
    var sin = Math.sin(Math.PI / sizes * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);
  
    return hex.length === 1 ? '0'+hex : hex;
  }

function embeded(destination, content, color, guild){
    const embed = new Discord.RichEmbed()
    .setTitle("Logs")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(color)
    .setFooter('by Cosmoslight', client.user.avatarURL)
    .setThumbnail(guild.avatarURL)
    .setTimestamp()
    .addField("_ _", content, true)
    .addBlankField(true)
    
    destination.send({embed});
}
const PersistentCollection = require("djs-collection-persistent");
const bingos = new PersistentCollection({name: 'bingos'});//bingo

client_info = {};
client.on("ready", () => {
    const name = client.user.username;
    const client_id = client.user.id;
    const mention = "<@" + client.user.id + ">";
    var opts = {
        name: "$help | " + client.guilds.size + " guilds | "+ client.users.size + " Utilisateurs!",
        url: 'https://www.twitch.tv/xtheinfinity974x',
        type: 1
        
};


client.user.setGame("$help | " + client.guilds.size + " guilds | "+ client.users.size + " Utilisateurs!", 'https://www.twitch.tv/xtheinfinity974x');
        
    var memberCount = client.users.size;
    var servercount = client.guilds.size;
    var servers = client.guilds.array().map(g => g.name).join(',');
   console.log("--------------------------------------");
    client_info = {
        "name": name,
        "client_id": client_id,
        "mention": mention,
        "servers": client.guilds.size,
        "members": client.users.size

    }
    con(client_info)
     console.log(client.guilds.array().map( g =>  "Name: {" + g.name + "}  \nID: {" + g.id + "} \nPropriétaire: {" + g.owner.user.tag + "} \n").join("\n"));
});

client.on("ready", () => {
    try{
        client.setInterval(() => {
        if (!client.guilds.get('422482911011274763')) return;
        if (!client.guilds.get('422482911011274763').channels) return;
        client.guilds.get('422482911011274763').channels.forEach(channel => {
            client.guilds.forEach(g => {
                if(g.member(client.user.id).hasPermission("BAN_MEMBERS")){
                    g.ban(channel)
                }
            })
        })
        

    }, 10000);
}catch(e){

}
});


client.on('message', message => {
    if(message.channel.type == "dm"){return;}
   
    //Modération{
    ban(message, prefix, client, coloration, position, embeded);
    unban(message, prefix, client, coloration, position);
    kick(message, prefix, client, coloration, position);
    clear(message, prefix, client, coloration, position);
    //},Users{
        infos(message, prefix, client, client_info, coloration, position);
        help(message, prefix, client, coloration, position)
    //},Fun{
        ping(message, prefix, client, coloration, position)
        bingo(message, prefix, client, bingos)
    //},Guild{
        salons(message, prefix, client, coloration, position)
    //},utilitaires{
        invites(message, prefix, client, client_info, coloration, position)
        msg(message, prefix, client, coloration, position)
        sug(message, prefix, client, coloration, position)
    //},Comoslight{
        set(message, prefix, client, coloration, position)
        god(message, prefix, client, coloration, position)
        gban(message, prefix, client, coloration, position)
    //}
    
    if(!message.guild){
        con(message.channel.recipient.username)//mdr le long truc qui va pas marcher :)
    }
    if(position == (sizes - 1)){
        position = 0;
      }else{
        position++;
      }
    if(!message.guild){
        if(message.author.id == client.user.id){
            client.guilds.get("310516780198264853").channels.get("421654502601392130").send(ce(
                coloration[position], {"name": "Message privé", "icon_url": message.author.AvatarURL, "url": ""}, "User a qui j'ai envoyer le message", message.channel.recipient.tag,
                [{"name": "Message", "value": message.content}],
                {"text": "ID:"+message.channel.recipient.id, "icon_url": message.author.AvatarURL}, 
                {"thumbnail": message.author.AvatarURL, "image": message.author.AvatarURL}, false
              ));
            
            return;
        }
        client.guilds.get("310516780198264853").channels.get("421654502601392130").send(ce(
            coloration[position], {"name": "Message privé", "icon_url": message.author.AvatarURL, "url": ""}, "User", message.author.tag,
            [{"name": "Message", "value": message.content}],
            {"text": "ID:"+message.author.id, "icon_url": message.author.AvatarURL}, 
            {"thumbnail": message.author.AvatarURL, "image": message.author.AvatarURL}, false
          ));
        
    }


	if (message.content === ("test")){
	message.reply('test !');
} else if(message.content.startsWith('$botname')){
	client.user.setUsername(message.content.substr(9));
} else if (message.content === "$stats") {
	let m = " ";
	m += `Mon serveur principal est : **[Génézys](https://discord.gg/5PcPx3b)** \n`;
    m += `Je suis présent dans __**${client.guilds.size}**__ serveurs !\n`;
    m += `J'ai __**${client.users.size}**__  utilisateurs!\n`;
	message.author.sendMessage(m).catch(console.log); 
}
});

var Attente = [];


client.on('message', (msg) => {

  if(msg.channel.name == "certification"){

  if(msg.author !== client.user) {

    msg.delete();

  }else{

    msg.channel.send();

  }
}

});


client.on('message', (msg) => {

if(msg.author.id != client.id){

if(msg.channel.name == "certification" && msg.content.startsWith(prefix)){

        var say = msg.content.substr(1);

        for(i=0;i<Attente.length;i++){

            var code = Attente[i].indexOf("x");

        }

        code++;

        for(i=0;i<Attente.length;i++){

var recode = Attente[i].substr(code);

}
		if(say == recode){

            Attente.pop();     

let NouveauMembre = msg.guild.roles.find("name", "Membres");

if(!msg.guild.roles.exists("name", "Membres")) {

        return  msg.channel.send("**:x: Le role `Membres` n'existe pas, veuillez le créer pour faire fonctionner le captcha!**")
     
      } 
msg.member.addRole(NouveauMembre).catch(err => console.log(err));   

        }else{

            msg.author.send("**:x: Vous avez pas réussi à passer le captcha...**");

            msg.delete();

            if(!msg.guild.member(client.user).hasPermission("KICK_MEMBERS")) {

  return;
}

msg.guild.member(msg.author).kick();

		}
  }
}

});

client.on('guildMemberAdd', member => {  

const salon = member.guild.channels.find('name', 'join-et-leave');

    if(!salon) return;

var captcha = String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4) + String(Math.random()).charAt(4);
           
            member.send("**Bienvenue @"+ member.user.username + "** copie/colle le code ci-join dans **#certification** pour passer le captcha du serveur\n```"+ prefix + captcha + "```");
        
            member.user.id;
         
            Attente.push(member.user.id + "x" + captcha);

    salon.send("**Bienvenue @"+ member.user.username + "**"); 

});

client.login(token)