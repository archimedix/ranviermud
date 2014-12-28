var CommandUtil = require('../src/command_util').CommandUtil;
var l10n_file = __dirname + '/../l10n/commands/remove.yml';
var l10n = require('../src/l10n')(l10n_file);
exports.command = function (rooms, items, players, npcs, Commands)
{
	return function (args, player)
	{
		thing = CommandUtil.findItemInRoom(args.split(' ')[0], player, true);
		if (!thing) {
			player.sayL10n(l10n, 'ITEM_NOT_FOUND');
			return;
		}

		player.say(item.getUuid(thing));
	};
};