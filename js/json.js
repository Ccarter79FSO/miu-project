/*
Christopher Carter
MIU Project Week 2
Term 0212
*/

function autoFillData() {
var json = {
	"Game1": {
		"gname"		:["Game Name:", "Game 1"],
		"platform"	:["Platform:", "Xbox"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "01-11-2012"],
		"notes"		:["Notes:", "Test1"]
	},
	"Game2": {
		"gname"		:["Game Name:", "Game 2"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["RTS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "01-17-2012"],
		"notes"		:["Notes:", "Test2"]
	},
	"Game3": {
		"gname"		:["Game Name:", "Game 3"],
		"platform"	:["Platform:", "PS3"],
		"genre"		:["Genre:", ["RPG", "Action/Adventure"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "01-15-2012"],
		"notes"		:["Notes:", "Test3"]
	},
	"Game4": {
		"gname"		:["Game Name:", "Game 4"],
		"platform"	:["Platform:", "Xbox"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "2"],
		"pdate"		:["Purchase Date:", "11-11-2011"],
		"notes"		:["Notes:", "Test4"]
	},
	"Game5": {
		"gname"		:["Game Name:", "Game 5"],
		"platform"	:["Platform:", "Wii"],
		"genre"		:["Genre:", ["Casual"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "12-17-2011"],
		"notes"		:["Notes:", "Test5"]
	},
	"Game6": {
		"gname"		:["Game Name:", "Game 6"],
		"platform"	:["Platform:", "Other"],
		"genre"		:["Genre:", ["Action/Adventure"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "01-21-2012"],
		"notes"		:["Notes:", "Test6"]
	},
	"Game7": {
		"gname"		:["Game Name:", "Game 7"],
		"platform"	:["Platform:", "DS"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "10-11-2011"],
		"notes"		:["Notes:", "Test7"]
	},
	"Game8": {
		"gname"		:["Game Name:", "Game8"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["RTS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "09-13-2011"],
		"notes"		:["Notes:", "Test8"]
	},
	"Game9": {
		"gname"		:["Game Name:", "Game 9"],
		"platform"	:["Platform:", "PS3"],
		"genre"		:["Genre:", ["RPG"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "01-15-2011"],
		"notes"		:["Notes:", "Test9"]
	},
	"Game10": {
		"gname"		:["Game Name:", "Game 10"],
		"platform"	:["Platform:", "Xbox"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "01-11-2012"],
		"notes"		:["Notes:", "Test10"]
	},
	"Game11": {
		"gname"		:["Game Name:", "Game 11"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["RTS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "05-09-2011"],
		"notes"		:["Notes:", "Test11"]
	},
	"Game12": {
		"gname"		:["Game Name:", "Game 12"],
		"platform"	:["Platform:", "PS3"],
		"genre"		:["Genre:", ["Sports"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "2"],
		"pdate"		:["Purchase Date:", "09-15-2011"],
		"notes"		:["Notes:", "Test12"]
	},
	"Game13": {
		"gname"		:["Game Name:", "Game 13"],
		"platform"	:["Platform:", "Xbox"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "04-17-2011"],
		"notes"		:["Notes:", "Test13"]
	},
	"Game14": {
		"gname"		:["Game Name:", "Game 14"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["RPG"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "11-17-2011"],
		"notes"		:["Notes:", "Test14"]
	},
	"Game15": {
		"gname"		:["Game Name:", "Game 15"],
		"platform"	:["Platform:", "Wii"],
		"genre"		:["Genre:", ["Simulation"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "01-01-2012"],
		"notes"		:["Notes:", "Test15"]
	},
	"Game16": {
		"gname"		:["Game Name:", "Game 16"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["FPS", "RPG"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "12-11-2011"],
		"notes"		:["Notes:", "Test16"]
	},
	"Game17": {
		"gname"		:["Game Name:", "Game 17"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "06-05-2011"],
		"notes"		:["Notes:", "Test17"]
	},
	"Game18": {
		"gname"		:["Game Name:", "Game 18"],
		"platform"	:["Platform:", "PS3"],
		"genre"		:["Genre:", ["RPG", "Action/Adventure"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "1"],
		"pdate"		:["Purchase Date:", "01-15-2012"],
		"notes"		:["Notes:", "Test18"]
	},
	"Game19": {
		"gname"		:["Game Name:", "Game 19"],
		"platform"	:["Platform:", "Xbox"],
		"genre"		:["Genre:", ["FPS"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "07-11-2011"],
		"notes"		:["Notes:", "Test19"]
	},
	"Game20": {
		"gname"		:["Game Name:", "Game 20"],
		"platform"	:["Platform:", "PC"],
		"genre"		:["Genre:", ["Simulation"]],
		"fav"		:["Favorite:", "Yes"],
		"players"	:["Players:", "4"],
		"pdate"		:["Purchase Date:", "12-17-2011"],
		"notes"		:["Notes:", "Test20"]
	},
	"Game21": {
		"gname"		:["Game Name:", "Game 21"],
		"platform"	:["Platform:", "PS3"],
		"genre"		:["Genre:", ["Action/Adventure"]],
		"fav"		:["Favorite:", "No"],
		"players"	:["Players:", "2"],
		"pdate"		:["Purchase Date:", "10-15-2011"],
		"notes"		:["Notes:", "Test21"]
	}};
	    for (var n in json) {
        var id = Math.floor(Math.random() * 100000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }

}


