// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data)) // Handle data
//   .catch(error => console.error('Error:', error)); // Handle error


//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'New Post',
//       body: 'This is a test post.',
//       userId: 1
//     })
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

//     function createCounter(n) {
//       return function() {
//           return n++;
//       };
//   }
  
//   // Example usage:
//   const counter = createCounter(10);
//   console.log([counter(), counter(), counter()]); // Output: [10, 11, 12]
  
//   const counter2 = createCounter(-2);
//   console.log([counter2(), counter2(), counter2(), counter2(), counter2()]); // Output: [-2, -1, 0, 1, 2]
  
  
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    toString() {
        return `[${this.nums.join(",")}]`;
    }
}

// Example 1:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // Output: 10

// Example 2:
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // Output: "[23,98,42,70]"

// Example 3:
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // Output: 0
