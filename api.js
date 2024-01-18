// const url = 'http://127.0.0.1:8000/api/v1/memo11/username_validate/nexblu-code11/far4h1234';

// fetch(url, {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Response:', data[0]['code11']);
//         // Lakukan sesuatu dengan respons dari API di sini
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error di sini
//     });

// const apiUrl = 'http://127.0.0.1:8000/api/v1/memo11/login';

// const requestBody = {
//     username: 'nexblu',
//     password: '089508453973',
//     api_key: 'nexblu-code11'
// };

// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestBody),
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Response:', data);
//         // Lakukan sesuatu dengan respons dari API di sini
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error di sini
//     });

// const apiUrl = 'http://127.0.0.1:8000/api/v1/memo11/register';

// const requestBody = {
//     username: 'nexblu-1',
//     password: '089508453973-1',
//     api_key: 'nexblu-code11'
// };

// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(requestBody),
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Response:', data);
//         // Lakukan sesuatu dengan respons dari API di sini
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error di sini
//     });

const url = 'http://127.0.0.1:8000/api/v1/memo11/register';

const data = {
    username: 'nexblu2',
    email: 'farras.pramudita@gmail.com',
    password: 'D3v1n4634824',
    api_key: 'nexblu-code11'
};

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const requestOptions = {
    method: 'POST',
    headers: new Headers(headers),
    body: JSON.stringify(data)
};

fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful:', data);
        // Call additional functions or perform actions after successful registration
    })
    .catch(error => {
        console.error('Error during registration:', error);
        // Handle errors or display error messages
    });


