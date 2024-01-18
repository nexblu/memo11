import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { toast } from 'react-toastify'

const FormLogin = () => {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const proceedLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        const url = `http://127.0.0.1:8000/api/v1/memo11/username_validate/..../${username}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
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
                    <Form.Control type="text" placeholder="Email Or Phone Number" value={username} onChange={e => usernameUpdate(e.target.value)} />
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