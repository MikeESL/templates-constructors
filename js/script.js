//template 1

var instagrams = [
{
	user: "gospelhaunted",
	photo: "<a href=\"http://instagram.com/p/kpMfI-jSfV/\">Folly Beach Pier</a>",
},
{	user:"keidrianraye",
	photo: "<a href=\"http://instagram.com/p/llV7zcun9S/\">Shem Creek</a>",
},
{	user: "stognasty",
	photo:"<a href=\"http://instagram.com/p/mAsri3K84G/\">Botany Bay</a>",
},
];

var template = function(instaData) {
		var markup = "";
		var i;

		for ( i=0; i<instaData.length; i++){
			markup += "<h2>" + instaData[i].user + "</h2><p>" + instaData[i].photo + "</p>";
}
		return markup;
};
var popularGrams = template(instagrams);
$(".template1").append(popularGrams);