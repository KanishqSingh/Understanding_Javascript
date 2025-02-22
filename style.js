fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data)) // Handle data
  .catch(error => console.error('Error:', error)); // Handle error


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'New Post',
      body: 'This is a test post.',
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  