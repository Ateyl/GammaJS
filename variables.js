// let a;
// a = 10;
// let b = 20;
// console.log(a);
// // const c;
// // c = 100 // ! нельзя переназначать константу, только в одной строчке через = 
// const c = 100;




// var x = 10;
// console.log(x);
// x = 20
// var x = 'Artjom'
// console.log(x);


// let num = 123.0;
// console.log(typeof num);
// console.log(0.1 + 0.2);
// console.log(typeof NaN);
// console.log(120 + 40);
// console.log(120 - 40);
// console.log(120 * 40);
// console.log(120 / 40);
// console.log(120 % 40);
// console.log(120 ** 3);
// console.log(9 % 4);

// let x = 5;
// x = x + 5;
// x += 5;

// console.log(x++);
// console.log(x);


// let userName = '123';
// console.log(typeof userName);
// console.log(userName + 'hello world');
// console.log(userName * 123);
// console.log("My\n favourite book\t is \"Metro 2023\"");

// let text = "hello\n"
// console.log(text.length);

// let name = "Artjom";
// let surname = "Buzak";

// console.log(`Name: ` + name + ` Surname: ` + surname);
// console.log(`Name: ${name} Surname: ${surname}`);


// null 
// let i = null;
// NaN
// let bool = false;
// let k = Number(false)
// console.log(k);
// let j = Boolean(0); // ! number "0" "-0" "NaN" "" "Undefined" "Null" = false
// console.log(j);
// let a = Boolean('')
// console.log(a);



// * LESSON 2



// let fruits = 'Apple, Banana, Peer';
// console.log(fruits[0]);
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// fruits.length = 30;
// console.log(fruits.slice(0, 4));
// console.log(fruits.slice(5));
// console.log(fruits.slice(6, fruits.length));
// fruits = fruits.slice(0, 5);
// console.log(fruits);
// console.log(fruits.slice(end=7));

// let x = 'Hello'
// console.log(x.indexOf('l'));
// console.log(('#').repeat(10));
// console.log(x.replaceAll('ell', ''));
// let y = 'Hello people of planet earth';
// let word = y.split(' ');
// console.log(word);
// console.log(y.substr(5, 7));
// console.log(y.toUpperCase());
// let k ='  223  32323 let me    be   !'
// console.log(k.replaceAll('   ', ' '));
// const myCar = {
//     make: 'honda' , 
//     'car model': 'Civic' ,
//     popular: true
// }
// const myCar2 = {
//     make: 'honda' , 
//     'car model': 'Civic' ,
//     popular: true
// }
// console.log(myCar == myCar2);

// console.log(myCar.make);
// console.log(myCar['car model']);
// let status = 'popular';
// console.log(myCar['car model']);
// myCar.model = 'HR-V'
// myCar.color = 'red'
// myCar[status] = true;
// console.log(myCar);

// let a = {
//     make: 'bmw'
// };
// let b = a;
// a.make = 'VW';
// console.log(a, b);

// delete myCar.color; 
// console.log(myCar);


// const myCar = {
//     make: 'honda' , 
//     model: 'Civic' ,
//     info: { Year: 2000, 
//         color: 'red',
//     }
// }

// let myCarCopy = Object.assign({}, myCar)   // * let myCarcopy 
// myCarCopy.make - 'VW'
// console.log(myCar);
// console.log(myCarCopy);

// const myCarCopy = {...myCar};
// myCarCopy.info.year = 2024;

// const  myCarCopy = JSON.parse(JSON.stringify(myCar))
// myCarCopy.info.Year = 2024

// console.log(myCar);
// console.log(myCarCopy);
// console.log(myCar.info.Year);
// console.log(myCar['info']['color']);



// const userName = 'Terminator';
// const friendsQty = 100000;
// const userProfile = {
//     // name: userName,
//     // friends: friendsQty,
//     userName,
//     friendsQty,
//     emailVerified: false
// }
// console.log(userProfile);


// const button = {
//     width: 200,
//     color: 'green',

// }

// const btnText = {
//     text: 'buy'
// }

// const redButton = {
//     ...button ,
//     ...btnText ,
//     color: 'red',
// }
// console.log(redButton);


// const numArr = [1, [5, 9, {name: "Jack", info: [2, 3, 4]}, 2], 3];
// numArr.length = 10;
// const arr = new Array();
// console.log(typeof numArr);
// console.log(numArr[1][2].info[1]);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.push(10)
// console.log(nums.length);
// let removed = nums.pop()
// console.log(nums);
// console.log(removed);

// nums.unshift(0);
// console.log(nums);

// let x = nums.shift()
// console.log(nums, x);

// nums.forEach(num => {
//     console.log(num ** 2);
//     console.log(num ** 3);
// })

// const mycar = {
//     make:'BMW',
//     model: '235',
//     color: 'red',

// }

// console.log(Object.values(mycar));
// console.log(Object.keys(mycar));
// console.log(Object.entries(mycar));



// * LESSON 3