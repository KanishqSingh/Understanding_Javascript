// document.getElementById("myForm").addEventListener("submit", function (event) {
//     let valid = true;

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();

//     document.getElementById("nameError").textContent = "";
//     document.getElementById("emailError").textContent = "";
//     document.getElementById("passwordError").textContent = "";

//     if (name === "") {
//         document.getElementById("nameError").textContent = "Name is required";
//         valid = false;
//     }

//     let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.match(emailPattern)) {
//         document.getElementById("emailError").textContent = "Invalid email format";
//         valid = false;
//     }

//     if (password.length < 6) {
//         document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
//         valid = false;
//     }

//     if (!valid) {
//         event.preventDefault();
//     }
// });

// var addTwoPromises = function(promise1, promise2) {
//     return Promise.all([promise1, promise2]).then(values => values[0] + values[1]);
// };


// addTwoPromises(
//     new Promise(resolve => setTimeout(() => resolve(2), 20)), 
//     new Promise(resolve => setTimeout(() => resolve(5), 60))
// ).then(console.log);

// var memoize = function(fn) {
//     const cache = new Map();
//     let callCount = 0;

//     const getKey = (...args) => JSON.stringify(args); 

//     const memoizedFunction = (...args) => {
//         const key = getKey(...args);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//         callCount++;
//         const result = fn(...args);
//         cache.set(key, result);
//         return result;
//     };

//     memoizedFunction.getCallCount = () => callCount;

//     return memoizedFunction;
// };


// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);

// console.log(memoizedSum(2, 2)); 
// console.log(memoizedSum(2, 2)); 
// console.log(memoizedSum.getCallCount()); 

// console.log(memoizedSum(1, 2)); 
// console.log(memoizedSum.getCallCount()); 

// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// const memoFactorial = memoize(factorial);

// console.log(memoFactorial(3)); 
// console.log(memoFactorial(2)); 
// console.log(memoFactorial.getCallCount()); 

// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
//     };
    
//     export default message;