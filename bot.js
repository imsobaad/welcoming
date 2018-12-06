const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519933953868693504");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Néevira..,__:bouquet: :rose:**`), 4000)        
}
});

client2.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519933953868693504");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Néevira..,__:bouquet: :rose:**`), 4000)        
}
});

client3.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("519933953868693504");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**__# Weélcooome To Néevira..,__:bouquet: :rose:**`), 4000)        
}
});



client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("519995961167314955").join(); //by : ....
});


client2.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client2.channels.get("519995961167314955").join(); //by : ....
});


client3.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client3.channels.get("519997884134064131").join(); //by : ....
});



client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
