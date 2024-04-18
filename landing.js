function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice =`I have ${apples} 🍎 Apples and ${oranges} 🍊 Oranges`
    return juice
}
console.log(fruitProcessor(5, 10));



/* Function Declaration */
function calcAge1(birthYear) {
    return 2037 - birthYear;   
}
const age1 = calcAge1(1991); 


/* Function  Expression*/
const calcAge2 = function(birthYear) { 
    return 2037 - birthYear; 
}

const age2 = calcAge2(1991)

console.log(age1, age2);


document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))