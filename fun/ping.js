function ping(message, prefix, client, coloration, p){
    if(message.content.startsWith(prefix + 'ping')) {
        message.delete(message)
            const now = require('performance-now');
            const request = require("superagent");
            var debut = new Date();
            var mentionned = message.mentions.users.first();
            var getvalueof;
            if(mentionned) {
                var getvalueof = mentionned;
            } else {
                var getvalueof = message.author;
            }
            request('http://www.google.com', function(error, response, body) {
                var fin = new Date();
                var tempsMs = fin.getTime() - debut.getTime();
                message.channel.sendMessage({
                    embed: {
                        type: 'rich',
                        description: '',
                        fields: [{
                            name: ':white_check_mark: Temps de réponse :white_check_mark:',
                            value: tempsMs / (5 * 2) + ' ms',
                            inline: true
                        }],
                        color: 3447003,
                        footer: {
                            text: 'By Cosmoslight',
                            proxy_icon_url: ' '
                        },
                        author: {
                            name: getvalueof.username,
                            icon_url: getvalueof.avatarURL,
                            proxy_icon_url: ' '
                        }
                    }
                })
            })
        }
        }
module.exports = ping;