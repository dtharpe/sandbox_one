



//3_
// var person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";

// person.sayHi = function(){
//    return "Hi There";
// };

// var person = {
//   firstName : "John",
//   lastName : "Doe",
//   sayHI : function(){
//     return "Hi There";
//   }
  
// };

// var createPerson = function(firstName, lastName){
//   return{
//     firstName : firstName,
//     lastName : lastName,
//     sayHI : function(){
//       return "Hi There";
//     }
//   };
// };

// var janeDoe = createPerson("Jane", "Doe");
// var johnDoe = createPerson("John", "Doe");


// var johnDoe = {
//   firstName : "John",
//   lastName : "Doe",
//   sayHI : function(){
//     return "Hi There";
//   }
// };

// var janeDoe = {
//   firstName : "Jane",
//   lastName : "Doe",
//   sayHI : function(){
//     return "Hety there";
//   }
// };

// var employee = {
//   firstName : "Jim",
//   lastName : "Doe", 
//   position : "Manager",
//   sayHI : function(){
    
//   }
// };







//4_

// var name = "Jane Doe";

// var globalGreet = function(){
//   return "My Name is " + this.name;
// };

// var johnDoe = {
//   name: "John Doe",
//   greet : window.globalGreet.bind(window)
// };

// var makeRequest = function(url, callback){
  
//   var data = 10;
  
//   callback(data);
// };

// var obj = {
//   someValue: 20,
//   loadData : function(data){
//     var sum = this.someValue + data;
//     alert(sum);
//   },
//   prepareRequest : function(){
//     var url = "http://link.com";
//     makeRequest(url, this.loadData.bind(this));
//   }
// };



//5_
// var createPerson = function(firstName, lastName){
  
//   var person = {};
  
//   Object.defineProperties(person, {
//     firstName : {
//       value: firstName
//     },
//     lastName : {
//       value : lastName
//     },
//     fullName : {
//       get : function(){
//         return this.firstName + " " + this.lastName;
//       },
//       configurable: true
//     }
//   });
  
// //   Object.defineProperty(person, "firstName", {
// //     value : firstName
// //   });
  
// //   Object.defineProperty(person, "lastName", {
// //     value : lastName
// //   });
  
//   return person;
// };

// var person = createPerson("John", "Doe");

// Object.defineProperty(person, "fullName",{
//   get : function(){
//     return this.lastName + " , " + this.firstName;
//   }
// });