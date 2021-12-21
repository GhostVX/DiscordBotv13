const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord");

module.exports = {
  name: "cobra",
  author: "infected",
  run: async (client, message, args) => {
          new Snake({
        message: message,
        embed: {
        title: 'jogo da cobra',
        color: 'RED',
        OverTitle: "Game Over",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Você não tem permissão para usar botões para esta mensagem!',
      }).startGame();
  },
  //@kettraWorld
}; 
