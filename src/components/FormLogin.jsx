import { Form } from 'react-bootstrap'
import { useState } from 'react'

const FormLogin = () => {
    const [username, usernameUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    return (
        <>
            <Form>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="text" placeholder="Email Or Phone Number" value={username} onChange={e => usernameUpdate(e.target.value)} />
                </div>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => passwordUpdate(e.target.value)}/>
                </div>
                <div className="mb-3 me-5 ms-5">
                    <button type="button" class="btn btn-warning"><h3 className='text-light fw-bold'>Login</h3></button>
                </div>
            </Form>
        </>
    )
}

export default FormLogin;