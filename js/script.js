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

var instagramsTemplate = function(instaData) {
		var markup = "";
		var i;

		for ( i=0; i<instaData.length; i++){
			markup += "<h2>" + instaData[i].user + "</h2><p>" + instaData[i].photo + "</p>";
}
		return markup;
};
var popularGrams = instagramsTemplate(instagrams);
$(".template1").append(popularGrams);

//template 2

var photos = [
{
	image: "<img src=\"images/falls.png\">",
	desc: "Looking Glass Falls",
	author: "by Sabbath Lily Hawks",
},
{	image: "<img src=\"images/faucet.png\">",
	desc: "Faucet",
	author: "by Hazel Motes",
},
{	image: "<img src=\"images/dog.png\">",
	desc: "Maggie",
	author: "by Enoch Emory",
},
{	image: "<img src=\"images/sunrise3.png\">",
	desc: "Lake Marion Sunrise",
	author: "by Hoover Shoats",
}
];
var photosTemplate = function(photodata) {
		var markup = "";
		var i;

		for ( i=0; i<photodata.length; i++){
			markup += "<div>" + photodata[i].image + "</div><h3>" + photodata[i].desc + "</h3><h4>" + photodata[i].author + "</h4>";
}
		return markup;
};
var popularPhotos = photosTemplate(photos);
$(".template2").append(popularPhotos);

// Constructor, number 1
function beerSelection(brewery, style, name, onTap){
	this.brewery = brewery;
	this.style = style;
	this.name = name;
	this.onTap = onTap;
	this.emptyKeg = function() {
		this.onTap = false;
};
}	
var Shelter = new beerSelection("Coast", "IPA", "HopArt", true);
var ColemanPH = new beerSelection("Holy City", "Porter", "Pluff Mud", true);

// Constructors, interaction

function person (name){
	this.name = name;
	this.isSober = true;
	this.isDrunk = function() {
			this.isSober = false; 
};
	this.intoxicated = function(beverage) {
					beverage.isAlcohol = true;
};
};
var mike = new person("mike");

function beverage (type, isAlcohol){
		this.type = type;
		this.isAlcohol = isAlcohol;
		this.intoxicated = function(person){
					person.isSober = false;

};
};
var WoodfordReserve = new beverage("bourbon", true);
var Folgers = new beverage ("coffee", false);



































