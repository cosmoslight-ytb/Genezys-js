function help(message, prefix, client, coloration, p){
    const Discord = require('discord.js')
    const ce = require("embed-creator");


    if(message.content == (prefix+"help")){
        message.delete(message)
        var menti = message.author;

        message.author.send({embed: {
            
            color: 0x0000FF,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "",
            url: "",
            description: "Commande du Staff :",
            thumbnail:{
                url : client.user.avatarURL
            },
            fields: [{
                name: "📛 $ban @mention <raison>",
                value: "Permet de bannir une personne.",
                inline : true
              },
              {
                name: "🌠 $kick @mention <raison>",
                value: "Permet de kick une personne.",
                inline : true
              },
              {
                name: "🌐 $clear <nombre>",
                value: "Permet de nettoyer tous les messages dans un salon",
                inline : true
              },
              {
                name: "💺 $vocalchannel <nom-du-salon>",
                value: "Crée un salon vocal.",
                inline : true
              },
              {
                name: "💺 $textchannel <nom-du-salon> (text)",
                value: "Crée un salon textuel.",
                inline : true
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "🚨 © Fondateur du bot Cosmoslight "
            }
          }
        });


        message.author.send({embed: {
            color: 0x0099FF,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "",
            url: "",
            description: "Commande de l'user :",
            thumbnail:{
                // Pour son image : url : menti.avatarURL
                  url : client.user.avatarURL
              },
            fields: [{
                name: "🌐 $serverinfo / si",
                value: "Affiche les informations disponible sur le serveur.",
                inline : true
              },
              {
                name: "🎆 $botinfo / bi",
                value: "Affiche les informations du bot.",
                inline : true
              },
              {
                name: "🎇 $userinfo / uinfo",
                value: "Permet d'en savoir un peux plus sur vous.",
                inline : true
              },
              {
                name: "💳 $perms",
                value: "Permet de connaitre vos permissions ou celle des autres.",
                inline : true
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "🚨 © Fondateur du bot Cosmoslight "
            }
          }
        });

        message.author.send({embed: {
            color: 0x00FFFF,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "",
            url: "",
            thumbnail:{
              url : client.user.avatarURL
          },
            description: "Commande Utilitaire :",
            fields: [{
                name: "⚓ $invitebot / ib",
                value: "Vous recevez une l'invitation du bot.",
                inline : true
              },
              {
                name: "✈ $invite / i",
                value: "vous invite à rejoindre le serveur administrateur.",
                inline : true
              },
              {
                name: "🌠 $createinvite / ci",
                value: "crée une invitation pour rejoindre votre serveur.",
                inline : true
              },
              {
                name: "👾 $sug",
                value: "Faire une suggestion au créateur du bot.",
                inline : true
              },
              {
                name: "💫 $msg",
                value: "Envoie un message au créateur du serveur.",
                inline : true
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "🚨 © Fondateur du bot Cosmoslight "
            }
          }
        });

        let avatar = client.user.avatarURL

        message.author.send({embed: {
            color: 0x00FF99,
            
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "",
            url: "",
            description: "Commande Fun :",
            thumbnail:{
              url : client.user.avatarURL
          },
            fields: [
                {
                name: "🌟 $ping",
                value: "Affiche vos ms.",
                inline : true
              },
              {
                name: "✨ $bingo",
                value: "Trouvez le chiffre cacher!.",
                inline : true
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "🚨 © Fondateur du bot Cosmoslight "
            }
          }
        });
        
    }
    
}
module.exports = help;

    /*

    const embedas = new Discord.RichEmbed()
    .setColor(coloration[p])
    .setThumbnail(client.user.avatarURL)
   .setAuthor("Infinity974", "https://images-ext-1.discordapp.net/external/E1Sw-4c9zSs_iSR1SkRNbSVuZstFDFM9qQmOM5A0tC0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/319875805008232448/997a87a68fc93b26b7ce617958b7fa8b.png?width=17&height=17")
   .setDescription("Commande du Staff :")
   .addField("📛 $ping", "Affiche t'es ms!", true)
   .addField("🌠 $bingo", "Essaie de trouver le bon numéro!", true)
   .setTimestamp()
   .setFooter("🚨  Fondateur du bot TheInfinity974", "https://images-ext-1.discordapp.net/external/E1Sw-4c9zSs_iSR1SkRNbSVuZstFDFM9qQmOM5A0tC0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/319875805008232448/997a87a68fc93b26b7ce617958b7fa8b.png?width=17&height=17")
    .addBlankField(true)
    message.author.send({embedas});
      */

