
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:", fruits);


fruits.push("Grapes");
console.log("After push:", fruits);


fruits.pop();
console.log("After pop:", fruits);


fruits.unshift("Pineapple");
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

console.log("Contains Banana?", fruits.includes("Banana"));


let newArray = fruits.slice(1, 3);
console.log("Slice:", newArray);


fruits.splice(1, 1, "Kiwi");
console.log("After splice:", fruits);

fruits.reverse();
console.log("After reverse:", fruits);

fruits.sort();
console.log("After sort:", fruits);

console.log("Length:", fruits.length);