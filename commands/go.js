var l10n_file = __dirname + '/../l10n/commands/quit.yml';
var l10n = require('../src/l10n')(l10n_file);
exports.command = function (rooms, items, players, npcs, Commands)
{
	return function (args, player)
	{
        thing = args.split(' ')[0], player;
        var room = rooms.getAt(thing);
        if (room) {
            var destination = room.getTitle();
            player.setLocation(thing);
            player.say('Teleported to ' + room.getTitle(player.getLocale()));
        } else {
            player.say('Room not exist ');
        }
	};
};