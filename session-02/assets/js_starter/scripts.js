const fruits = ["banana", "pear", "apple"];
// fruits.push("mango");
// fruits.unshift("orange");

fruits.push("mango, orange");
fruits.unshift("mango, orange");
console.log(...fruits);

fruits.pop(); //  back of mango and orange
fruits.shift(); // front of mango and orange
fruits.splice(1, 1); // starting index, how many to remove

console.log(...fruits);

const items = ["a", "b", "c", "d", "e", "f"];
console.log(...items);
const i = 3;
const filteredItems = items
  .slice(0, i - 1)
  .concat(items.slice(i, items.length));

console.log(...filteredItems);