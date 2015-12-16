$(document).ready(function(){
	$.getJSON("https://api.spotify.com/v1/tracks/02BSpb2sKuFgs0Go3LRbTj", function(json){
		console.log(json.album.name);
		console.log(json.artists[0].name)
		console.log(json.name);
		console.log(json.preview_url)
		console.log(json.album.images[0].url)
	});
});