'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta 
          with ${ing1} and ${ing2} and ${ing3}`)
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Main Ingredient : ${mainIng}
     and others ingredient ${otherIng}`);

  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: '146 Nguyen Hoang ',
  mainIndex: 2,
  startIndex: 2,
});

// destructor object 
// const {
//   name: restaurantName,
//   openHours: openingHours,
//   cate: categories
// } = restaurant;

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 24, c: 99 };
({ a, b } = obj);
console.log(a, b)

// The Spread Operator (...)

// copy array and add new elements to the array 
// and add new elements to the array

const newMenu = [...restaurant.mainMenu, 'Sandwich'];
console.log(newMenu);

// join 2 arrays together

const menu = [...restaurant.starterMenu,
...restaurant.mainMenu];
console.log(menu)

// Iterables : array , string , maps , sets . Not object
const str = 'Jonas';
const letters = [...str, '', 'S.']
console.log(letters);

// const ingredients = [prompt("Let 's make pasta ! Ingredient 1? "),
// prompt("and 2?"), prompt("and 3?")];
// restaurant.orderPasta(...ingredients);

// Spread Construction Objects

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant, founder: 'Guiseppe'
};
console.log(newRestaurant);

//1) Destructuring 

// Spread , because on the right side of = 

const arr = [1, 2, ...[3, 4]];


// Rest , on the left of = , example

const [x, y, ...others] = [1, 2, ...[3, 4]];
console.log(x, y, ...others);

// rest in function object 

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('Chicken');

// for of loop over 

const menuforArray = [...restaurant.starterMenu,
...restaurant.mainMenu];

console.log(menuforArray)

// loop over array for entries and elements 

for (const [i, el] of menuforArray.entries()) {
  console.log(`${i + 1} : ${el}`);
  console.log();

}
// looping object key, value and entries array


// object key
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

// object value 

for (const time of Object.values(restaurant.openingHours)) {
  console.log(time);
}

// object entries array  and [key and value]

for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {

  console.log(`On ${key} we openning at ${open} and close at ${close}`);
}