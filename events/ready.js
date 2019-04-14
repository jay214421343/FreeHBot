module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(` ${client.guilds.size} servers and looking to ${client.users.filter(u => !u.bot).size} Users!`, {type: "LISTENING"});
};
users
