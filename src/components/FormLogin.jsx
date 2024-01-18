import { Form } from 'react-bootstrap'

const FormLogin = () => {
    return (
        <>
            <Form>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="text" placeholder="Email Or Phone Number" />
                </div>
                <div className="mb-3 me-5 ms-5">
                    <Form.Control type="password" placeholder="Password" />
                </div>
                <div className="mb-3 me-5 ms-5">
                    <button type="button" class="btn btn-warning"><h3 className='text-light fw-bold'>Login</h3></button>
                </div>
            </Form>
        </>
    )
}

export default FormLogin;