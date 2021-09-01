const fetch = require('node-fetch');

async function Fetch() {
    const response = await fetch('http://localhost:5000/file.txt', {method: 'GET'});

    const body = await response.text();
    console.log(body);
}

Fetch();

