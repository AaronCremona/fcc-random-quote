var qm = {
	numKeys: 0,

	currSong: {
		artist: "",
		album: "",
		track: "",
		img: "",
		previewUrl: "",
		quote: ""
	},

	init: function(){
		this.countKeys();
		this.newRandomQuote();
	},

	newRandomQuote: function(){
		var newKey = String(Math.floor(Math.random() * this.numKeys) + 1);
		var url = "https://api.spotify.com/v1/tracks/" + this.quotes[newKey].id;
		
		this.currSong.quote = this.quotes[newKey].quote;

		$.getJSON(url, function(json){
			console.log("album name: " + json.album.name);
			console.log("artist name: " + json.artists[0].name);
			console.log("track name: " + json.name);
			console.log("preview url: " + json.preview_url);
			console.log("img: " + json.album.images[0].url);

			this.currSong.album = json.album.name;
			this.currSong.artist =  json.artists[0].name;
			this.currSong.track =  json.name;
			this.currSong.previewUrl = json.preview_url;
			this.currSong.img = json.album.images[0].url;

			this.updateDom();
		}.bind(this));
	},

	updateDom: function() {
		this.updateBackground();
		this.updateAlbumArt();
		this.updateTrackInfo();
		this.updateQuote();
		this.updatePreview();
	},

	updateBackground: function() {
		var background = "url('" + this.currSong.img + "')";

		$('.background').css("background-image", background);
	},

	updateAlbumArt: function() {
		$('.album-art img').attr('src', this.currSong.img);
	},	

	updateTrackInfo: function() {

	},

	updateQuote: function() {

	},

	updatePreview: function() {

	},

	countKeys: function() {
		for (var key in this.quotes) {
			this.numKeys++;
		}
	},

	countChar: function() {
		var length;
		for(key in this.quotes) {
			length = this.quotes[key].quote.length;
			console.log("Key # " + key + "is " + length + " characters");
			if (length > 144) {
				console.log("shit that's too long");
			}
		}
	},

	quotes: {
		"1": {
			quote: "You are young and life is long \
				Ten years have got behind you \
				No one told you when to run \
				You missed the starting gun",
			id: "23W5DHu31ZLW9q0p2wQxfN",
		},
		"2": {
			quote: "Yes, how many times can a man turn his head \
				Pretending he just doesn't see ? \
				The answer my friend is blowin' in the wind \
				The answer is blowin' in the wind.",
			id: "18GiV1BaXzPVYpp9rmOg0E",
		},
		"3": {
			quote: "Yes, they're sharing a drink they call loneliness \
				But it's better than drinkin' alone",
			id: "70C4NyhjD5OZUMzvWZ3njJ",
		},
		"4": {
			quote: "No hell below us, above us only skies, Imagine all the people living for today",
			id: "7pKfPomDEeI4TPT6EOYjn9",
		},
		"5": {
			quote: "Running over the same old ground. <br> \
				What have we found <br> \
				The same old fears. <br> \
				Wish you were here." ,
			id: "1wHSxWBfPr3GO31y8KGrWe",
		},
		"6": {
			quote: "People talking without speaking, people hearing without listening",
			id: "2LkaNhCrNVmcYgXJeLVmsw",
		},
		"7": {
			quote: "Then she opened up a book of poems <br> \
				And handed it to me <br> \
				Written by an Italian poet <br> \
				From the thirteenth century <br> \
				And every one of them words rang true <br> \
				And glowed like burning coal <br> \
				Poidng off of every page <br> \
				Like it was written in my soul from me to you <br> \
				Tangled up in blue",
			id: "6Vcwr9tb3ZLO63F8DL8cqu",
		},
		"8": {
			quote: "Look, if you had, one shot or one opportunity <br> \
				To seize everything you ever wanted in one moment <br> \
				Would you capture it, or just let it slip?",
			id: "5Z01UMMf7V1o0MzF86s6WJ",
		},
		"9": {
			quote: "You said you’d never compromise <br> \
				With the mystery tramp, but now you realize <br> \
				He’s not selling any alibis <br> \
				As you stare into the vacuum of his eyes <br> \
				And ask him do you want to make a deal?",
			id: "3AhXZa8sUQht0UEdBJgpGc",
		},
		"10": {
			quote: "I can't tell where the journey will end <br> \
				But I know where to start",
			id: "4h8VwCb1MTGoLKueQ1WgbD",
		},
		"11": {
			quote: "So I'll love whatever you become \
				And forget the reckless things we've done \
				I think our lives have just begun \
				I think our lives have just begun",
			id: "5cvFycFL4BTMA3dHSstMqi",
		},
		"12": {
			quote: "We sit outside and argue all night long \
				About a god we've never seen \
				But never fails to side with me",
			id: "5hcer4MP5GeHqtSjDYx5AC",
		},
		"13": {
			quote: "You and I can both get jobs\
				And finally see what it means to be living",
			id: "2M9ro2krNb7nr7HSprkEgo",
		},
		"14": {
			quote: "If I could start again \
				A million miles away \
				I will keep myself \
				I would find a way",
			id: "5rpRzNcJZqKQXk9PIjreB6",
		},
		"15": {
			quote: "Look like nothin's gonna change \
				Everything, still remains the same \
				I can't do what ten people tell me to do",
			id: "4Y4Gd3ty8uut6Qw43c7yJc",
		},
		"16": {
			quote: "You got no time for the messenger, \
				Got no regard for the thing that you don't understand, \
				You got no fear of the underdog, \
				That's why you will not survive!",
			id: "2YRuexk6q6so8F5M69n4t1",
		},
		"17": {
			quote: "And instead of saying all of your goodbyes, let them know \
				You realize that life goes fast \
				It's hard to make the good things last \
				You realize the sun doesn't go down \
				It's just an illusion caused by the world spinning round",
			id: "2DFRFqWNahKtFD112H2iEZ",
		},
		"18": {
			quote: "The third planet is sure they’re being watched by an eye in the sky that can’t be stopped. \
				When they get to the promise land, they’re gonna shake the eye’s hands.",
			id: "6V0g1p7KaOzWc3wbjPlQuX",
		},
		"19": {
			quote: "Language is the liquid that we’re all dissolved in. \
				Great for solving problems, after it creates the problems.",
			id: "2q5zd5u4A4JzAbes2VDPjk",
		},
		"20": {
			quote: "And when the wave approaches \
				Take our ashes to the ocean \
				Who cares if hell awaits? \
				We're having drinks at heaven's gate",
			id: "7iOyMOxdOULvXqUqC26spJ",
		},
		"21": {
			quote: "Yeah, I'm working, making money \
				I'm just starting to build a name \
				I can feel it around the corner \
				I could make it anyday",
			id: "6WGaVdhY8uMWMgxiKpdLVy",
		},
		"22": {
			quote: "I'm tired of fighting \
				Fighting for a lost cause",
			id: "29i8axWOLDmgbiutJb9prB",
		},
		"23": {
			quote: "What I used to be will pass away and then you’ll see \
				That all I want now is happiness for you and me.",
			id: "3aU2ui8JQOtmgHYH0g1qFL",
		},
		"24": {
			quote: "The method acting that pays my bills \
				Keeps a fat man feeding in Beverly Hills \
				I've got a heavy metal mouth, it hurls obscenity \
				And I get my check from the trash treasury \
				Because I took my own insides out.",
			id: "5BtbRb1XfakaECaQoa0AOo",
		},
		"25": {
			quote: "“You disappoint me \
			You people raking in on the world \
				The devil’s script sells you the heart of a black bird \
				Shine on me baby \
				Cause it’s raining in my heart.”",
			id: "3Ak7zpMulNgKOyaseyyJSv",
		},
		"26": {
			quote: "And for a moment I lose myself \
				Wrapped up in the pleasures of the world \
				I've journeyed here and there and back again \
				But in the same old haunts, \
				I still find my friends",
			id: "02BSpb2sKuFgs0Go3LRbTj",
		},
		"27": {
			quote: "I get the news I need on the weather report. \
				I can gather all the news I need on the weather report. \
				Hey, I've got nothing to do today but smile.",
			id: "5MbXzXGbqobR8xPVPs8OXA",
		} 
	}
}

