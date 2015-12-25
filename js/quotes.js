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
			this.currSong.album = json.album.name;
			this.currSong.artist =  json.artists[0].name;
			this.currSong.track =  json.name;
			this.currSong.previewUrl = json.preview_url;
			this.currSong.img = json.album.images[0].url;

			this.updateDom();
		}.bind(this));
	},

	updateDom: function() {
		$('.app').hide();
		this.updateBackground();
		this.updateAlbumArt();
		this.updateTrackInfo();
		this.updateQuote();
		this.updatePreview();
		this.updateTweet();
		$('.app').fadeIn(1500);
	},

	updateBackground: function() {
		var background = "url('" + this.currSong.img + "')";
		$('.background').css("background-image", background).fadeIn("fast");
	},

	updateAlbumArt: function() {
		$('.album-art img').attr('src', this.currSong.img);
	},	

	updateTrackInfo: function() {
		var trackInfo = this.currSong.artist +
			" / " + this.currSong.album +
			"<br />" + this.currSong.track;
		$('.track-info').html(trackInfo);
	},

	updateQuote: function() {
		$('.lyric').html("<p>" + this.currSong.quote + "</p>");
	},

	updatePreview: function() {
		$('.preview video source').attr('src', this.currSong.previewUrl);
		$(".preview video")[0].load();
	},

	updateTweet: function() {
		console.log(this.currSong.quote);
		var quote = this.currSong.quote.replace(/<br>\s\s+/g, " ");
		console.log(quote);
		console.log(quote.length);
		var url = "https://twitter.com/intent/tweet?text=" + encodeURI(quote) + " @aaroncremona";

		$('#tweet-btn').attr('href', url);
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
			if (length > 127) {
				console.log("Key # " + key + " is " + length + " characters");

				console.log("shit that's too long");
			}
		}
	},

	quotes: {
		"1": {
			quote: "You are young and life is long<br>\
				Ten years have got behind you<br>\
				No one told you when to run<br>\
				You missed the starting gun",
			id: "23W5DHu31ZLW9q0p2wQxfN",
		},
		"2": {
			quote: "Yes, how many times can a man turn his head<br>\
				Pretending he just doesn't see ?<br>\
				The answer my friend is blowin' in the wind<br>\
				The answer is blowin' in the wind.",
			id: "18GiV1BaXzPVYpp9rmOg0E",
		},
		"3": {
			quote: "Yes, they're sharing a drink they call loneliness<br>\
				But it's better than drinkin' alone",
			id: "70C4NyhjD5OZUMzvWZ3njJ",
		},
		"4": {
			quote: "No hell below us, above us only skies, Imagine all the people living for today",
			id: "7pKfPomDEeI4TPT6EOYjn9",
		},
		"5": {
			quote: "Running over the same old ground. <br>\
				What have we found <br>\
				The same old fears. <br>\
				Wish you were here." ,
			id: "1wHSxWBfPr3GO31y8KGrWe",
		},
		"6": {
			quote: "People talking without speaking,<br>\
				people hearing without listening",
			id: "2LkaNhCrNVmcYgXJeLVmsw",
		},
		"7": {
			quote: "Then she opened up a book of poems <br>\
				And handed it to me <br>\
				Written by an Italian poet <br>\
				From the thirteenth century <br>\
				And every one of them words rang true <br>\
				And glowed like burning coal <br>\
				Pouring off of every page <br>\
				Like it was written in my soul from me to you <br>\
				Tangled up in blue",
			id: "6Vcwr9tb3ZLO63F8DL8cqu",
		},
		"8": {
			quote: "Look, if you had, one shot or one opportunity <br>\
				To seize everything you ever wanted in one moment <br>\
				Would you capture it, or just let it slip?",
			id: "5Z01UMMf7V1o0MzF86s6WJ",
		},
		"9": {
			quote: "You said you’d never compromise<br>\
				With the mystery tramp, but now you realize <br>\
				He’s not selling any alibis <br>\
				As you stare into the vacuum of his eyes <br>\
				And ask him do you want to make a deal?",
			id: "3AhXZa8sUQht0UEdBJgpGc",
		},
		"10": {
			quote: "I can't tell where the journey will end<br>\
				But I know where to start",
			id: "4h8VwCb1MTGoLKueQ1WgbD",
		},
		"11": {
			quote: "So I'll love whatever you become<br>\
				And forget the reckless things we've done<br>\
				I think our lives have just begun<br>\
				I think our lives have just begun",
			id: "5cvFycFL4BTMA3dHSstMqi",
		},
		"12": {
			quote: "We sit outside and argue all night long<br>\
				About a god we've never seen<br>\
				But never fails to side with me",
			id: "5hcer4MP5GeHqtSjDYx5AC",
		},
		"13": {
			quote: "You and I can both get jobs<br>\
				And finally see what it means to be living",
			id: "2M9ro2krNb7nr7HSprkEgo",
		},
		"14": {
			quote: "If I could start again<br>\
				A million miles away<br>\
				I will keep myself<br>\
				I would find a way",
			id: "5rpRzNcJZqKQXk9PIjreB6",
		},
		"15": {
			quote: "Look like nothin's gonna change<br>\
				Everything, still remains the same<br>\
				I can't do what ten people tell me to do",
			id: "4Y4Gd3ty8uut6Qw43c7yJc",
		},
		"16": {
			quote: "You got no time for the messenger,<br>\
				Got no regard for the thing that you don't understand,<br>\
				You got no fear of the underdog,<br>\
				That's why you will not survive!",
			id: "2YRuexk6q6so8F5M69n4t1",
		},
		"17": {
			quote: "And instead of saying all of your goodbyes, let them know<br>\
				You realize that life goes fast<br>\
				It's hard to make the good things last<br>\
				You realize the sun doesn't go down<br>\
				It's just an illusion caused by the world spinning round",
			id: "2DFRFqWNahKtFD112H2iEZ",
		},
		"18": {
			quote: "The third planet is sure they’re being watched by an eye in the sky that can’t be stopped.<br>\
				When they get to the promise land, they’re gonna shake the eye’s hands.",
			id: "6V0g1p7KaOzWc3wbjPlQuX",
		},
		"19": {
			quote: "Language is the liquid that we’re all dissolved in.<br>\
				Great for solving problems, after it creates the problems.",
			id: "2q5zd5u4A4JzAbes2VDPjk",
		},
		"20": {
			quote: "And when the wave approaches<br>\
				Take our ashes to the ocean<br>\
				Who cares if hell awaits?<br>\
				We're having drinks at heaven's gate",
			id: "7iOyMOxdOULvXqUqC26spJ",
		},
		"21": {
			quote: "Yeah, I'm working, making money<br>\
				I'm just starting to build a name<br>\
				I can feel it around the corner<br>\
				I could make it anyday",
			id: "6WGaVdhY8uMWMgxiKpdLVy",
		},
		"22": {
			quote: "I'm tired of fighting<br>\
				Fighting for a lost cause",
			id: "29i8axWOLDmgbiutJb9prB",
		},
		"23": {
			quote: "What I used to be will pass away and then you’ll see<br>\
				That all I want now is happiness for you and me.",
			id: "3aU2ui8JQOtmgHYH0g1qFL",
		},
		"24": {
			quote: "The method acting that pays my bills<br>\
				Keeps a fat man feeding in Beverly Hills<br>\
				I've got a heavy metal mouth, it hurls obscenity<br>\
				And I get my check from the trash treasury<br>\
				Because I took my own insides out.",
			id: "5BtbRb1XfakaECaQoa0AOo",
		},
		"25": {
			quote: "You disappoint me<br>\
			You people raking in on the world<br>\
				The devil’s script sells you the heart of a black bird<br>\
				Shine on me baby<br>\
				Cause it’s raining in my heart",
			id: "3Ak7zpMulNgKOyaseyyJSv",
		},
		"26": {
			quote: "And for a moment I lose myself<br>\
				Wrapped up in the pleasures of the world<br>\
				I've journeyed here and there and back again<br>\
				But in the same old haunts,<br>\
				I still find my friends",
			id: "02BSpb2sKuFgs0Go3LRbTj",
		},
		"27": {
			quote: "I get the news I need on the weather report.<br>\
				I can gather all the news I need on the weather report.<br>\
				Hey, I've got nothing to do today but smile.",
			id: "5MbXzXGbqobR8xPVPs8OXA",
		},
		"28": {
			quote: "So I start a revolution from my bed<br>\
				'Cos you said the brains I had went to my head.",
			id: "7CVYxHq1L0Z4G84jTDS6Jl",
		},
		"29": {
			quote: "And the ones that I make pay<br>\
				Are never the ones who deserve it<br>\
				And the ones who deserve it they'll never understand it<br>\
				Yes, I know I am going to hell in a purple basket<br>\
				At least I will be in another world, while you're pissing on my casket",
			id: "5tySfs2d6KXneF5GbfHWE9",
		},
		"30": {
			quote: "This is our decision, to live fast and die young.<br>\
				We've got the vision, now let's have some fun.<br>\
				Yeah, it's overwhelming, but what else can we do?<br>\
				Get jobs in offices, and wake up for the morning commute?",
			id: "4iG2gAwKXsOcijVaVXzRPW",
		},
		"31": {
			quote: "I met him in a cell in New Orleans I was<br>\
				down and out<br>\
				He looked to me to be the eyes of age<br>\
				as he spoke right out<br>\
				He talked of life, talked of life, he laughed<br>\
				clicked his heels and stepped",
			id: "003d3VbyJTZiiOYT2W7fnQ",
		},
		"32": {
			quote: "I'm a new soul<br>\
				I came to this strange world<br>\
				Hoping to learn a bit 'bout how to give and take<br>\
				But since I came here, felt the joy and the fear<br>\
				Finding myself making every possible mistake",
			id: "6obMmMuVhvB0VMTZa5EJIP",
		},
		"33": {
			quote: "Well, I've been afraid of changing<br>\
				'Cause I've built my life around you<br>\
				But time makes you bolder<br>\
				Even children get older<br>\
				And I'm getting older too",
			id: "5ihS6UUlyQAfmp48eSkxuQ",
		},
		"34": {
			quote: "Sunday morning, praise the dawning<br>\
				It's just a restless feeling by my side<br>\
				Early dawning, Sunday morning<br>\
				It's just the wasted years so close behind",
			id: "3lX49Bqy21Y5HneUJ7p55G",
		},
		"35": {
			quote: "I've stopped my dreaming<br>\
				I won't do too much scheming<br>\
				These days, these days<br>\
				These days I sit on corner stones<br>\
				And count the time in quarter tones to ten<br>\
				Please don't confront me with my failures<br>\
				I had not forgotten them",
			id: "2ZRBKVRMQ9OK4EeTaMHHSY",
		},
		"36": {
			quote: "Stephanie says that she wants to know<br>\
				Why she's given half her life, to people she hates now",
			id: "1juscRi0i84j7ypDKeVY1H",
		},
		"37": {
			quote: "My friends are gettin older,<br>\
				So I guess I must be too.<br>\
				Without their loving kindness,<br>\
				I don't know what I'd do.<br>\
				Oh the wine bottle's half empty-<br>\
				The money's all spent.<br>\
				And we're a cross between our parents<br>\
				And hippies in a tent.",
			id: "6YFBulokjnf14xNWFd2DdG",
		},
		"38": {
			quote: "Fraka-kaka-kaka-kaka-kow!<br>\
				Fraka-kaka-kaka-kaka-kow!<br>\
				Fraka-kaka-kaka-kaka-kow!<br>\
				What the fox say?",
			id: "70Xf9wGwlpJXcdwFVAWbrQ",
		},
		"39": {
			quote: 'We used to play pretend, give each other different names,<br>\
				We would build a rocket ship and then we\'d fly it far away,<br>\
				Used to dream of outer space but now they\'re laughing at our face,<br>\
				Saying, "Wake up, you need to make money."',
			id: "3CRDbSIZ4r5MsZ0YwxuEkn",
		},
		"40": {
			quote: "People come, people go<br>\
				Some grow young, some grow cold<br>\
				I woke up in between<br>\
				A memory and a dream",
			id: "7MooGz4ZPE4bNxjFegR6Jx",
		},
		"41": {
			quote: "We know the fire awaits unbelievers<br>\
				All of the sinners the same<br>\
				Girl, you and I will die unbelievers<br>\
				Bound to the tracks of the train",
			id: "7psPPGwhFzP3pyOcb3ivcT",
		}  
	}
}

