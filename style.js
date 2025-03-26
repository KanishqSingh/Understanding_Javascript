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
  
  