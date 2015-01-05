// function Car(model){

// 	this.model = model;
// 	this.color = "silver";
// 	this.year = "2012";

// 	this.getInfo = function(){
// 		return this.model + " " + this.year;
// 	};
// }


// function Car(model, year, miles){

// 	//var
// 	this.model = model;
// 	this.year = year;
// 	this.miles = miles;

// 	//method
// 	this.toString = function(){
// 		return this.model + " has done " + this.miles + " miles";
// 	};
// }



function Car(model, year, miles){
	//var
	this.model = model;
	this.year = year;
	this.miles = miles;

}

Car.prototype.toString = function(){
	return this.model + " has done " + this.miles + " miles";
};
