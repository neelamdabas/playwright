console.log("hello");

//Q1..convert string to array
let str="hello,how are you";
//console.warn(str.split());
//console.warn([str]);
//on space bases 
console.warn(str.split(' '));

//Q2..replace any character,only one char replace
let str1="hello,who are you";
console.warn(str1.replace('h',"a"));
console.log(str1.replace('h',"s"));
console.log(str1.substring(6,10));
let tem=str1.substring(6,10);
console.warn();
let str2="how are you";
console.log(str2);
//reverse string
//let temp=str2.split(" ").reverse().join('');
//console.warn(temp);
console.warn(str.substring(0,str.lenght-1));
console .warn(str.length);
let text="neelam";
console.log(text.length);
console.log(text.toUpperCase());
//remove extra space

let value="  Hello  ";
console.log(value);
console.log(value.trim());
//check if a string contain a value true or false
let masg="login succesfull";
console.log(masg.includes("sucessfull"));

//strtswith and endswith function
let url="hi my name is neelam";
url.startsWith("hi");
console.log(url);


//replace/replace all()
let text1="hi i m neelam";
console.log(text1.replace("neelam","tejasvi"))
console.log(text1.replaceAll("hi i m neelam","hello world"));
