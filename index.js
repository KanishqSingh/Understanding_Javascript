// //output
// // console.log([] + {} === {} + []) //true

// // let x = 1;
// // let y = "1";

// // console.log(++x, ++y); // 2 2


// // let a = true + true;
// // let b = a + false;

// // console.log(b); //2

// // function test() {
// //     if (true) {
// //       let  = 10;
// //       var b = 20;
// //     }
// //     console.log(b);
// //     console.log(a);
// //   }
// //   test(); // true 20

// // const a = { b: { c: 2 } };
// // const b = { ...a };
// // a.b.c = 3;

// // console.log(b.b.c); //true 3

// // let x = [1, 2, 3];
// // let [, , y] = x;

// // console.log(y); //3

// // console.log("Start");
// // setTimeout(() => console.log("Inside Timeout"), 0);
// // console.log("End"); //start end inside timeout

// // const obj1 = { name: "Alice" };
// // const obj2 = obj1;
// // obj2.name = "Bob";
// // console.log(obj1.name); //bob

// // (function() {
// //     var a = 10;
// //     console.log(a);
// //   })();
// //   console.log(a); //10

// // function addCall() {
// //     const name = document.getElementById('name').value;
// //     const number = document.getElementById('number').value;
// //     const callList = document.getElementById('callList');

// //     if (name.trim() === '' || number.trim() === '') {
// //         alert('Please enter both name and number');
// //         return;
// //     }

// //     const timestamp = new Date().toLocaleString();
// //     const callItem = document.createElement('div');
// //     callItem.classList.add('call-item');
// //     callItem.innerHTML = `<strong>${name}</strong> (${number})<br><small>${timestamp}</small>`;
    
// //     callList.prepend(callItem);
// //     document.getElementById('name').value = '';
// //     document.getElementById('number').value = '';
// // }

// // function searchCalls() {
// //     const filter = document.getElementById('search').value.toLowerCase();
// //     const callItems = document.getElementsByClassName('call-item');
    
// //     for (let item of callItems) {
// //         const text = item.textContent.toLowerCase();
// //         item.style.display = text.includes(filter) ? '' : 'none';
// //     }
// // }

// // BigInt
// const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
// x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// // Number
// Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992

// var compose = function(functions) {
//     return function(x) {
//         return functions.reduceRight((acc, fn) => fn(acc), x);
//     };
// };


// console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); // Output: 65
// console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)); // Output: 1000
// console.log(compose([])(42)); // Output: 42

// var promiseAll = function(functions) {
//     return new Promise((resolve, reject) => {
//         let results = new Array(functions.length);
//         let completed = 0;
//         let hasRejected = false;

//         functions.forEach((fn, index) => {
//             fn()
//                 .then(value => {
//                     if (hasRejected) return; // Ignore if already rejected
//                     results[index] = value;
//                     completed++;
//                     if (completed === functions.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch(error => {
//                     if (!hasRejected) {
//                         hasRejected = true;
//                         reject(error);
//                     }
//                 });
//         });

//         if (functions.length === 0) {
//             resolve([]);
//         }
//     });
// };


// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]).then(console.log).catch(console.error); // [5]

// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]).then(console.log).catch(console.error); // "Error"

// promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]).then(console.log).catch(console.error); // [4, 10, 16]




function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   


function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb"));   
console.log(lengthOfLongestSubstring("pwwkew"));   

function maxBags(t, testCases) {
    let results = [];
    
    for (let i = 0; i < t; i++) {
        let [x, y] = testCases[i];
        let totalCoins = x * y;
        let bags = Math.floor(totalCoins / 100);
        results.push(bags);
    }
    
    return results;
}

// Example usage
const t = 3;
const testCases = [
    [10, 10],
    [20, 4],
    [70, 7]
];

console.log(maxBags(t, testCases));

function isArmyReady(n, weapons) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < n; i++) {
        if (weapons[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    return evenCount > oddCount ? "READY FOR BATTLE" : "NOT READY";
}

// Example usage
const n = 3;
const weapons = [2, 3, 4];

console.log(isArmyReady(n, weapons));


function maxRentalMonths(t, testCases) {
    let results = [];
    
    for (let i = 0; i < t; i++) {
        let [x, y] = testCases[i];
        let months = Math.floor((y - 1) / x);
        results.push(months);
    }
    
    return results;
}

// Example usage
const t = 2;
const testCases = [
    [5, 12],
    [5, 5]
];

console.log(maxRentalMonths(t, testCases));

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    
    return true;
}

function processInput(input) {
    const lines = input.trim().split("\n");
    const T = parseInt(lines[0], 10);
    let result = [];

    for (let i = 1; i <= T; i++) {
        const N = parseInt(lines[i], 10);
        result.push(isPrime(N) ? "yes" : "no");
    }

    console.log(result.join("\n"));
}

// Example usage:
const input = `5
23
13
20
1000
99991`;

processInput(input);
