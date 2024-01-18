const url = 'http://127.0.0.1:8000/api/v1/memo11/username_validate/nexblu-code11/far4h1234';

fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data[0]['code11']);
        // Lakukan sesuatu dengan respons dari API di sini
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error di sini
    });
