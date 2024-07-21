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



const list1 = [1, 2];
const [first1, second1] = list1;
console.log(first1);
console.log(second1);



const list2 = [1, 2, 3, 4, 5];
const [first2, second2] = list2;
console.log(first2);
console.log(second2);

const list3 = [1, 2, 3, 4, 5];
const [first3, second3, third3, fourth3, fifth3] = list3;
console.log(first3);
console.log(second3);
console.log(third3);
console.log(fourth3);
console.log(fifth3);

const list4 = [1, 2, 3, 4, 5];
const [first4, second4, ...others] = list4;
console.log(first4);
console.log(second4);
console.log(others);
