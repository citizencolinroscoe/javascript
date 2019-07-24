/*let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();

const addUp = (num1, num2) => {
    return num1 +num2;
}
addUp(7,3);
console.log(addUp(7,3));

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius)+32;
};
console.log("the temp is" + getFahrenheit(15) + "•F");

const takeOrder = (size, drinkType) => {
    console.log(`order received: ${size} ${drinkType}`);
}
takeOrder("tall","latte")

let orderCount =0;
const takeOrder = (topping1, topping2) => {
    console.log(`Order number ${orderCount} pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder ("cheese","garlic")
takeOrder ("ham", "pineapple")
takeOrder ("chicken", "sweetcorn")
*/

let orderCount = 0
const takeOrder = (filling1, filling2, filling3, filling4, filling5)=>{
  //  console.log(`order number ${orderCount} Sub with ${filling1}, ${filling2}, ${filling3}, ${filling4} and ${filling5} thank you enjoy!`)
    orderCount++
}
takeOrder ("cheese","pepperoni","ham","salami","pancetta")

let accBal = 400
let accPin = 1234
const cashMachine=(pinNum , cash) => {
    if (pinNum == accPin && cash <=accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)
    } else if (pinNum != accPin) {
        console.log(`PIN incorrect. Please try again`);
    } else {`Insufficent funds!`}
}
cashMachine(1234, 300)
cashMachine(1235, 300)
cashMachine(1234, 410)
cashMachine(1235, 500)