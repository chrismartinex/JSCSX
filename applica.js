// // const firstName = "chris"
// // console.log(firstName);

// // const synonymo = ['fantastic', 'wonderful', 'great'];
// // const greetings = [];

// // for (let i = 0; i < synonymo.length; i++)
// // {
// //  greetings.push('Have a ' + synonymo[i] + ' day!');

// // }
// // console.log(greetings);

// // const synonymo = ['fantastic', 'wonderful', 'great'];
// // const greetings = [];

// // for (let i = 0; i < synonymo.length; i++)
// // {
// //  greetings.push('Have a ' + synonymo[i] + ' day!');
// // }
// // console.log(greetings);


// // // For loops and Arrays below until line 35
// // const firstNames = ["Jon", "Arya", "Jamie"];
// // const lastNames = ["Snow", "Stark", "Lannister"];
// // const places = ["The Wall", "Winterfell", "Kings Landing"];
// // const bios = [];

// // for (let i = 0; i < firstNames.length; i++)
// // {
// //  bios.push("My name is  " + firstNames[i] + " " +
// //  lastNames[i] + " and I am from " + places[i])
// // }
// // console.log(bios);

// //below is the For loops and Calculating Array Elements
// //given an array of five numbers use a for loop to iterate through the array and increase each number by two.
// const increaseByTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < increaseByTwo.length; i++)
// {
//  increaseByTwo[i] = increaseByTwo[i] + 3;
// }
// console.log(increaseByTwo);

// // //while loop
// // let count =2;

// // while ( count < 8)
// // {
// //  count +=1;
// // }
// // console.log(count);



// // function func () {
// //   let mucho = ["uno", "dos", "tres"];

// //   mucho.push("todayisAWonderfulday");
// // }

// // console.log('mucho');
// // func ();

// // if statement below
// if (4 < 2)
// {
//   console.log("This shouldn't log");
// } else if ( 4 > 2)
// {
//   console.log ("This should log");
// }
// console.log(4);

// let day = "Christmas";
// if (day === "work day")
// {
//   console.log("Time to go to work");
// }else if (day === "sick day")
// {
//   console.log("Stay home and rest up!");
// }else{
//   console.log("enjoy your holiday!");
// }
// console.log("christmans");

// // ADD CODE HERE
// // write a for loop 
// // push each number into fb
// // string "fizz" divisible by 3
// //string "buzz" divisible by 5
// // string "fizzbuzz" divisible by 3 and 5
// // i understood this problem but I'm having to re go over it beacuse it seems confussing, that in the original problem
// //when you psudeo code it they have the information where fizzbuzz is further down the message, but I'm having to put it on top
// //of my for loop when i though I would work on problem even when read from top to bottom, but I guess not. 


// // ADD CODE HERE
// let fb = [];
// // create for loop 1 through 16
// for (let i = 1; i < 17; i ++)
//   {
//  if (i % 3 === 0 && i % 5 === 0){
//       fb.push("fizzbuzz");
//     }else if (i % 3 === 0)
//     {
//       fb.push("fizz");
//     }else if (i % 5 === 0)
//       {
//         fb.push("buzz");
//       }else{
//         fb.push(i);
//       }
  
//   }
// console.log(fb);
// // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
// //string "buzz" divisible by 5
// // string "fizzbuzz" divisible by 3 and 5
// //trying all this things out


// // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// //iterations in Javascript
// //terate through the array and multiply a number by 10 if 
// //it is greater than or equal to 5.
// //example below did not work


// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// for (let i = 0; i < timesTenIfOverFive; i++)
// {
//   if (i >= 5)
//   {
//     timesTenIfOverFive[i] = timesTenIfOverFive[i]*10
//   }else if (i < 5)
//   console.log(timesTenIfOverFive[i]);
// }

// //the sample below also did not work
// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

// for (let i = 0; i < timesTenIfOverFive.length; i++) {
//   if (i >= 5) {
//     console.log(timesTenIfOverFive[i] * 10);
//   } else {
//     console.log(timesTenIfOverFive[i]);
//   }
// }

// console.log(timesTenIfOverFive);


// // Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]


// //bottom iteration did work for the exercise, I was doing

// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// // ADD CODE HERE
// for (let i = 0; i < timesTenIfOverFive.length; i++) {
//     if(timesTenIfOverFive[i]>=5){
//     timesTenIfOverFive[i]=timesTenIfOverFive[i]*10;
//     }
// }

// // Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]


// // array builder write a function arrayBuilder that takes in a 
// //count object and returns an array filled with the appropiate
// //numbers elements. The order of the elements in the array does not
// //matter, but repeated elements should be grouped. 

// function arrayBuilder(obj) {
// //input obj
// //output: array;

// const outputArray = [];
// for (let key in obj){
//   let repeatedCount = obj[key];
//   while(repeatedCount > 0){
//     outputArray.push(key);
//     repeatedCount -= 1;
//   }
//   return outputArray;
// }
// console.log(arrayBuilder({'cats': 2, 'dogs': 1}));
// console.log(arrayBuilder({});)

// //below objects - iterate with for...in js
// //example below is what worked.
// }

// const checkObj = {
//   oddNum: 1,
//   evenNum: 2,
//   foundNum: 5,
//   randomNum: 18
// };
//  const objToArray = [];

// for (const property in checkObj) {
//   if (checkObj[property] >= 2){
//     objToArray.push(checkObj[property])
//   }
// }
// console.log(objToArray);





// // ADD CODE HERE
// for (const key in checkObj){
//   if(checkObj [key] >= 2) {
//     objToArray.push ("${checkObj [key]}");
//   }
// }
// console.log(objToArray)

// for (let key in obj){
//   let repeatedCount = obj[key];
//   while(repeatedCount > 0){
//     objToArray.push[key];
//     repeatedCount =2;
//   }
//   return objToArray;
// }

//creating a small function

// function func() {
//   return 'hello world';
// };
// const result = func ();
// console.log(result);

// first DOM below
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const text = 'Thank You! ❤️';
  // assign the variable 'text'
button.innerText = text
});
Hurray. You made it!
