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

var addTwoPromises = function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(values => values[0] + values[1]);
};


addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)), 
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(console.log);
