const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} ! Le bot est en ligne 24h/24 🚀`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'ping') {
        await interaction.reply(`Pong ! Latence : ${client.ws.ping}ms 🟢`);
    }
});

client.login(process.env.TOKEN);

