// const firstName = "chris"
// console.log(firstName);

// const synonymo = ['fantastic', 'wonderful', 'great'];
// const greetings = [];

// for (let i = 0; i < synonymo.length; i++)
// {
//  greetings.push('Have a ' + synonymo[i] + ' day!');

// }
// console.log(greetings);

// const synonymo = ['fantastic', 'wonderful', 'great'];
// const greetings = [];

// for (let i = 0; i < synonymo.length; i++)
// {
//  greetings.push('Have a ' + synonymo[i] + ' day!');
// }
// console.log(greetings);


// // For loops and Arrays below until line 35
// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];
// const bios = [];

// for (let i = 0; i < firstNames.length; i++)
// {
//  bios.push("My name is  " + firstNames[i] + " " +
//  lastNames[i] + " and I am from " + places[i])
// }
// console.log(bios);

//below is the For loops and Calculating Array Elements
//given an array of five numbers use a for loop to iterate through the array and increase each number by two.
const increaseByTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < increaseByTwo.length; i++)
{
 increaseByTwo[i] = increaseByTwo[i] + 3;
}
console.log(increaseByTwo);

// //while loop
// let count =2;

// while ( count < 8)
// {
//  count +=1;
// }
// console.log(count);



// function func () {
//   let mucho = ["uno", "dos", "tres"];

//   mucho.push("todayisAWonderfulday");
// }

// console.log('mucho');
// func ();

// if statement below
if (4 < 2)
{
  console.log("This shouldn't log");
} else if ( 4 > 2)
{
  console.log ("This should log");
}
console.log(4);

let day = "Christmas";
if (day === "work day")
{
  console.log("Time to go to work");
}else if (day === "sick day")
{
  console.log("Stay home and rest up!");
}else{
  console.log("enjoy your holiday!");
}
console.log("christmans");
