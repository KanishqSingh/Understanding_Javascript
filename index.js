//output
// console.log([] + {} === {} + []) //true

// let x = 1;
// let y = "1";

// console.log(++x, ++y); // 2 2


// let a = true + true;
// let b = a + false;

// console.log(b); //2

// function test() {
//     if (true) {
//       let  = 10;
//       var b = 20;
//     }
//     console.log(b);
//     console.log(a);
//   }
//   test(); // true 20

// const a = { b: { c: 2 } };
// const b = { ...a };
// a.b.c = 3;

// console.log(b.b.c); //true 3

// let x = [1, 2, 3];
// let [, , y] = x;

// console.log(y); //3

// console.log("Start");
// setTimeout(() => console.log("Inside Timeout"), 0);
// console.log("End"); //start end inside timeout

// const obj1 = { name: "Alice" };
// const obj2 = obj1;
// obj2.name = "Bob";
// console.log(obj1.name); //bob

// (function() {
//     var a = 10;
//     console.log(a);
//   })();
//   console.log(a); //10

function addCall() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const callList = document.getElementById('callList');

    if (name.trim() === '' || number.trim() === '') {
        alert('Please enter both name and number');
        return;
    }

    const timestamp = new Date().toLocaleString();
    const callItem = document.createElement('div');
    callItem.classList.add('call-item');
    callItem.innerHTML = `<strong>${name}</strong> (${number})<br><small>${timestamp}</small>`;
    
    callList.prepend(callItem);
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
}

function searchCalls() {
    const filter = document.getElementById('search').value.toLowerCase();
    const callItems = document.getElementsByClassName('call-item');
    
    for (let item of callItems) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    }
}
  




  