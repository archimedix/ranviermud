var l10n_file = __dirname + '/../l10n/commands/quit.yml';
var l10n = require('../src/l10n')(l10n_file);
var fs = require('fs');
exports.command = function (rooms, items, players, npcs, Commands)
{
	return function (args, player)
	{

        var room = rooms.getAt(player.getLocation());
        var vnum = room.getLocation(player.getLocale());
        var file = 'chyrellos.json';
        fs.readFile(file, function (err, data) {
            if (err) throw err;
            var chy = JSON.parse(data);
            console.log('lettura da file' + chy);
            chy.push(vnum);
            
            var jChy = JSON.stringify(chy);
             fs.writeFile(file, jChy, function (err) {
             if (err) throw err;
             console.log('Scrittura di ' + jChy);
             });
        });

	};
};