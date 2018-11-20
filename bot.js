const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509812306058805288");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Quietness..,__:dove: :leaves:**`), 4000)        
}
});

client2.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509812306058805288");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Quietness..,__:dove: :leaves:**`), 4000)        
}
});

client3.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509812306058805288");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Quietness..,__:dove: :leaves:**`), 4000)        
}
});

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
