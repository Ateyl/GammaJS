// if (condition: boolean) {
//     body of if statement
// } else if ( condition: boolean) {
//     body of if statement
// } else ()


// let x = 5;

// if (x === 5) {
//     console.log("x is equal to 5");
// } else if (x > 2) {
//     console.log('x is greater than 5');
// } else {console.log('x is less than 5');

// }

// const myCar = {
//     make: 'honda',
//     type: 'civic',
//     popular: '' ,

// }
// if (myCar.popular) {
//     console.log(`this is my ${myCar.make} ${myCar.type}. It is popular`);
// } else { console.log(`this is my ${myCar.make} ${myCar.type}. It is not popular`);}

// let numbers = [1, 2, 3, 4, 5];
// const alln = []

// numbers.forEach (num => {
// num + 2;
//     }
//     )

//     console.log();

// const idcode = '123457113'

// if (idcode.length === 11) {
//     console.log('idcode');
// } else { 
//    if (idcode.length > 11) {
//     console.log("too long");
//    }  else {console.log('too short');}
// } 
// const x = 5; 
// if (x === 5) {
//     console.log('strict');
// }else if (x ==5) {
//     console.log('not strict');
// }

// if (!x) {
//     console.log('Hello');
// }
// console.log(!true);
// console.log(!!true);
// console.log(!false);
const age = 17;
// age < 12 - child
// 12 <= age < 18 -teenager
// age >= 18 - adult
// if (age < 12) {
//     console.log('child');
// }else if (age < 18){
//     console.log('teenager');
// } else {
//     console.log('adult');
// }

// if (age < 12 ) {
//     console.log("child");
// }
// if (12 <= age < 18) {
//     console.log('teenager');
// }

// if (age < 12) {
//     console.log('child');
// }
// if (age >= 12 || age <18) {       // && И || ИЛИ
//     console.log('teenager');
// }

// function sumTwoNumbers(a, b) {
//     let result = a + b;
//     console.log(result);
//     return result
// }
// sumTwoNumbers(5, 10);
// function sayHello() {
//     console.log('Hello');
// }
// sayHello();

function triangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const area = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
    return area
}
console.log(triangleArea(3, 4, 5));

function oddOrEven(number) {
    if (number % 2 === 0) {
        return true
    } return false
}
console.log(oddOrEven(5));