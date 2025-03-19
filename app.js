/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job working with arrays and loops! 
  The following improvements will help with efficiency, readability, and 
  best practices while keeping everything clear and easy to understand. 🚀
*/

// ✅ Exercise 1: Define an empty array
// No changes needed. Perfect!
const foods = [];
console.log("Exercise 1 result:", foods);

// ✅ Exercise 2: Add strings to the array
// Nice use of `.push()`! Clean and correct.
foods.push("pizza", "cheeseburger");
console.log("Exercise 2 result:", foods);

// ✅ Exercise 3: Insert at the beginning
// Great use of `.unshift()`!
foods.unshift("taco");
console.log("Exercise 3 result:", foods);

// ✅ Exercise 4: Access an array element
// Works well! Used `const` since `favFood` is not changing.
const favFood = foods[1];
console.log("Exercise 4 result:", favFood);

// ✅ Exercise 5: Insert an element between two others
// `.splice()` is correctly used!
foods.splice(2, 0, "tofu");
console.log("Exercise 5 result:", foods);

// ✅ Exercise 6: Replace elements
// Good approach! Replacing 'pizza' with 'sushi' and 'cupcake'.
foods.splice(1, 1, "sushi", "cupcake");
console.log("Exercise 6 result:", foods);

// ✅ Exercise 7: Using `.slice()` method
// Works perfectly! No changes needed.
const yummy = foods.slice(1, 3);
console.log("Exercise 7 result:", yummy);

// ✅ Exercise 8: Finding an index
// `.indexOf()` used correctly.
const soyIdx = foods.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

// ✅ Exercise 9: Joining elements
// `.join()` works great!
const allFoods = foods.join(" -> ");
console.log("Exercise 9 result:", allFoods);

// ✅ Exercise 10: Check for an element
// `.includes()` used correctly!
const hasSoup = foods.includes("soup");
console.log("Exercise 10 result:", hasSoup);

// ✅ Exercise 11: Odd numbers from an array
// Correct logic! `.filter()` makes it even cleaner.
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter((num) => num % 2 !== 0);
console.log("Exercise 11 result:", odds);

// ✅ Exercise 12: FizzBuzz with arrays
// Clean approach using loops! Works perfectly.
const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let num of nums) {
  if (num % 3 === 0) fizz.push(num);
  if (num % 5 === 0) buzz.push(num);
  if (num % 3 === 0 && num % 5 === 0) fizzbuzz.push(num);
}

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

// ✅ Exercise 13: Retrieve the Last Array
// Good use of `.length - 1`, but `.at(-1)` is a modern alternative.
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];
const numList = numArrays.at(-1);
console.log("Exercise 13 result:", numList);

// ✅ Exercise 14: Accessing within nested arrays
// Works correctly! No changes needed.
const num = numArrays[2][1];
console.log("Exercise 14 result:", num);

// ✅ Exercise 15: Nested array sum
// Improved by simplifying the loop structure.
let total = 0;
numArrays.forEach((innerArray) => {
  innerArray.forEach((num) => {
    total += num;
  });
});
console.log("Exercise 15 result:", total);
