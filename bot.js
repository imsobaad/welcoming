const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();





client.on('guildMemberAdd' , member => {
	const channel = member.guild.channels.find('name', 'quiet');
	if(!channel) return;
	channel.send('**__# Weélcooome To Quietness..,__:dove: :leaves:**');
)};

client2.on('guildMemberAdd' , member => {
	const channel = member.guild.channels.find('name', 'quiet');
	if(!channel) return;
	channel.send('**__# Weélcooome To Quietness..,__:dove: :leaves:**');
)};

client3.on('guildMemberAdd' , member => {
	const channel = member.guild.channels.find('name', 'quiet');
	if(!channel) return;
	channel.send('**__# Weélcooome To Quietness..,__:dove: :leaves:**');
)};




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
