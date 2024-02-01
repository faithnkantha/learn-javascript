/*document.write("now you are in js fuck!");//print thing in the browser.
console.log('not printed in the browser');//not hown in browser
//used for debugging.
console.log(2+5);//inspect inthe browser then the console.
let a=5;
let b=20;
let c = a*3+a-b+(a+b)
console.log("the value of the c is: ",c);
// in js we can use var or let to declare a variable
//js is case-sensitive */

let bitname;
bitname="yamaha";
document.write(bitname);//if there is no value assigned to variable in js its automaticaly undefined.
//let is not accesseble outside the scope its declared.
//let is used motly in loops and not able to be redeclared.
const x=5,y=7;
const z=x*y;
document.write(z);
//const cant be redeclared.
// datatypes-numbers,string,boolean,undefined,null,arraysand objects
//loosely typed-you don't need to write the datatye of variable in js.
document.write((typeof(bitname)));
let g;
let h=null;
document.write((typeof(g)));
document.write((typeof(h)));