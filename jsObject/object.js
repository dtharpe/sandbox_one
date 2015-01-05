// var jim = {
// 	name: "Jim",
// 	skill: ["JS", "Ruby", "PHP"],
// 	greet: function(name, mood){
// 		name = name || "You";
// 		mood = mood || "good";

// 		console.log("Hello, " + name + 
// 					" I am " + this.name + 
// 					" and I am in a " +mood + " mood");
// 	}
// };

// var nick = {
// 	name: "Nick",
// 	greet: jim.greet
// };

// var jimGreet = jim.greet;
// jim.greet.call(nick);
// jimGreet.call(nick);
// jimGreet.apply(nick, ["Matt", "Bad"]);

//obj
var personPrototype = {
	name: 'Anonnymoouse',
	greet: function(name, mood){

		name = name || "You";
		mood = mood || "good";

		console.log("Hello, " + name + 
					" I am " + this.name + 
					" and I am in a " +mood + " mood");
	},
	species: 'Homo Sapien'
};
//contructor
function Person (name) {
	this.name = name;
}


Person.prototype = personPrototype;

jim = new Person('Jim');