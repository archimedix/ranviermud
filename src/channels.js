exports.Channels = {
	say: {
		name: 'say',
		description: 'Talk to those around you',
		use: function (args, player, players)
		{
			args = args.replace("\033", '');
			players.broadcastAt("<bold><cyan>" + player.getName() + "</cyan></bold> says '" + args + "'", player);
			players.eachExcept(player, function (p) {
				if (p.getLocation() === player.getLocation()) {
					p.prompt();
				}
			});
		}
	},

	chat: {
		name: 'chat',
		description: 'Talk to everyone online',
		use: function (args, player, players)
		{
			args = args.replace("\033", '');
			players.broadcast("<bold><magenta>[chat] " + player.getName() + ": " + args + "</magenta></bold>", player);
			players.eachExcept(player, function (p) { p.prompt(); });
		}
	},
    tell: {
		name: 'tell',
		description: 'Talk to a specific person',
		use: function (args, player, players)
            {
                var nameEnd = args.indexOf(" ");
                var target = args.substring(0,nameEnd);
                var text = args.substring(nameEnd);
                var exists = players.some(function(p){ return p.getName() === target; });
                if (exists){
                    players.broadcastIf("<magenta>" + player.getName() + " told you: " + text + "</magenta>", function(p){return p.getName() === target; });
                    player.say("<magenta>You told " + target + ": " + text + "</magenta>", player);
                }
                else {
                    player.say("<magenta>" + target + " is not logged in.</magenta>", player);
                }
                players.eachIf(function(p){ return p.getName() === player || p.getName() === target; }, function (p) { p.prompt(); });
            }
		}
};
