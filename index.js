const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!")
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Made by SkyAbout', type: 0 } });
    console.log("Le bot est pret a fonctionner !");
});

bot.login('Mzk0OTc0NDg3MjI3MDA2OTk3.DSPUxA.8q1-W11_YgG2Psvw9kQsclapoGY')


bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#40A497")
            .addField ("Commandes - Fornite Crew  |  !help", "Voici les commandes que le bot vous propose :")
            .addField ("!avatar", "Fornite Crew vous donne un lien permettant de voir / télécharger votre avatar")
        message.channel.sendEmbed(help_embed);
        console.log ('Commande help')
    }
    if (message.content === prefix + "avatar"){
        message.reply(message.author.avatarURL);
    }
});

bot.on('message', message => {
    if (message.content === prefix + "regle"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#40A497")
            .addField ("Bonjour et bienvenue à toi sur Fortnite Crew ! :)", "**tetreeefe**")
            .addField ("Ce serveur est avant tout créer pour passer du bon temps sur Fortnite et pour rencontrer des gens.", "Biensûr comme partout, il existe des personnes qui viennent pour nous/vous embeter, le staff est donc là pour vous aider. :innocent: ")
            .addField ("Vous de devez pas :", "               - :no_entry_sign: Etre irrespectueux envers autrui.")
            .addField ("               - :no_entry_sign: Etre injurieux envers autrui", "               - :no_entry_sign: Proscrire toute force de discrimination.")
            //.addField ("", "")
            //.addField ("", "")
            //.addField ("", "")
            message.channel.sendEmbed(help_embed);
        console.log ('Commande regle')
    }

});

bot.on('message', message => {
    if (message.content.startsWith("!ftn")) {
        message.delete();
    }     
});

//Vous de devez pas :

 ///- :no_entry_sign: Etre irrespectueux envers autrui.
//                        - :no_entry_sign: Etre injurieux envers autrui.
 //       - :no_entry_sign: Proscrire toute force de discrimination.
 //         - :no_entry_sign: Ne pas pub pour son / un autre discord. (Mp & Channels)
 //             - :no_entry_sign: Ne pas spam / flood. 

//Vous devez :

      // - :white_check_mark: Etre gentil(le)
       //          - :white_check_mark: Parler avec un language correcte
        ////  - :white_check_mark: Respecter vos supérieurs.

//Les règles citées sont simples mais fondamentales, vous devez donc les respecter.
//@everyone