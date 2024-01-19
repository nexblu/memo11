import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const navigate = useNavigate();

    const proceedLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        const apiUrl = 'http://127.0.0.1:8000/api/v1/memo11/login';

        const requestBody = {
            username: username,
            password: password,
            api_key: 'nexblu-code11'
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                if (data[0]['code11']['status_code'] === 200) {
                    console.log('masuk')
                    navigate('/note-app')
                    alert(data[0]['code11']['status'])
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error di sini
            });
    };

    return (
        <>
            <Form onSubmit={proceedLogin}>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="text" placeholder="Username" value={username} onChange={e => usernameUpdate(e.target.value)} />
                </div>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => passwordUpdate(e.target.value)} />
                </div>
                <div className="mb-3 me-5 ms-5">
                    <button type="submit" class="btn btn-warning"><h3 className='text-light fw-bold'>Login</h3></button>
                </div>
            </Form>
        </>
    )
}

export default FormLogin;