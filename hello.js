 "use strict"; //used on the top of the file it means the code works the modern way 
//only comment appear before use strict
alert("hello") //line breaks give automatic implies semicolon
alert("world")
alert(3 + //when a line ends with + that's means its not complete
	1
	+2);* // use semi colon at least for now
	//  use ctrl+/
	//use ctrl+shift+/ 
	// to create a variable in JavaScript we use let(variables is used to store info)
	let message; //declare the var message can use var instead of let in old way
	message="i love JavaScript"; //store info
	alert(message); //access 
let name="john", age="3", message="love you";// declare multiple var in a line
alert(name)
alert(age)
alert(message)
// changing value in variable
let message;
message="hello";
message="changed";
alert(message);
//declare two variables and copy data from one to another
let message="hello";//repeated let cause error
let world=message;
alert(message)
alert(world)
//to declare constant use const instead of let.
const MyBirthday="19th January";
alert(MyBirthday)
// capital-named constants are only used as aliases for “hard-coded” values.
//TASK 1
let admin ,name;
name="john";
admin=name;
alert(admin)
//TASK 2
let ourPlanetName= "Earth", currentUserName="john";
//We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.





