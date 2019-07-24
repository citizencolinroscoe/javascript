/*for(i = 0; i<10; i++){
    console.log(i);

for(i=9; i>-1; i--){
    console.log(i)
}
let faveDrinks=[
    "milk",
    "tea",
    "Lemonade"
]
console.log(faveDrinks[0])
console.log(faveDrinks[1])
console.log(faveDrinks[2])
*/
let faveFilms=[
    "Boondock Saints",
    "Sean Of The Dead",
    "Dog Soldiers",
    "Pappodoppoulos & Sons",
    "Usual Suspects"
]
faveFilms.push("Leon")
faveFilms.push("Ronin")
for(filmIndex=0; filmIndex <= faveFilms.length; filmIndex++){
    console.log(faveFilms[filmIndex])
}
const filmCheck = () =>
if (faveFilms[2] ==  "ghostbusters"){
    console.log("yay its gb")
} else {
    console.log("noooo")
}
}
filmCheck