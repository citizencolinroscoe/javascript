/*let password = "bluemoon";
if (password.length>=8){
    console.log("access granted");
}
else{
    console.log("password too short");
}

let num = 10;
let x = 3;
let y = 5;
if (num %x===.0 || num %y===.0 ){
    console.log("this number is divisable by 3 or 5");
}
else {
    console.log("this number is not divisable by 3 or 5");
}

let num = 21;
if (num %3===0 && num %5===0){
    console.log("fizzbuzz");
}
else if (num %5===0){
    console.log("buzz");
}
else if (num %3===0){
    console.log("fizz");
}
else {
    console.log("no");
}
*/
let space1 = "O" 
let space2 = "X" 
let space3 = "O"
let space4 = "X"
let space5 = "X"
let space6 = ""
let space7 = "O"
let space8 = ""
let space9 = ""
console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3}`);
console.log("   |   |   ");
console.log("___________");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("___________");
console.log("   |   |   ");
console.log(` ${space7} | ${space8}  | ${space9}`);
console.log("   |   |   ");
if (space1 ==="X" && space2 ==="X" && space3 ==="X"){
    console.log("X wins");
}
else if (space1 ==="O" && space2 ==="O" && space3 ==="O"){
    console.log("O wins")
}
else {
    console.log("try again");
}