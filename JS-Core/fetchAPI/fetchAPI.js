

fetch('https://123jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => console.log('Co loi'));