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

// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(callback);

        return {
            unsubscribe: () => {
                const callbacks = this.events.get(event);
                if (callbacks) {
                    this.events.set(event, callbacks.filter(cb => cb !== callback));
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.has(event)) {
            return [];
        }
        return this.events.get(event).map(callback => callback(...args));
    }
}

// Example usage:
const emitter = new EventEmitter();

// Subscribe to an event
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);

// Emit the event
console.log(emitter.emit("firstEvent", [5])); // Output: [6, 7]

// Unsubscribe the first event
sub1.unsubscribe();

// Emit the event again
console.log(emitter.emit("firstEvent", [5])); // Output: [7]

Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};

// Example 1:
const array1 = [{"id":"1"}, {"id":"1"}, {"id":"2"}];
console.log(array1.groupBy(item => item.id));
// Output: { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }

// Example 2:
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
];
console.log(array2.groupBy(list => String(list[0])));
// Output: { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }

// Example 3:
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array3.groupBy(n => String(n > 5)));
// Output: { "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }
