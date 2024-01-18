import Register from "../components/Register";
import logo from '../../static/images/gbr.png';
import { Image, Button } from 'react-bootstrap'

const RegisterPage = () => {
    return (
        <>
            <section className="login jumbotron text-center pt-3">
                <h3 className='fw-bold'>Memo 11</h3>
                <p className='fw-bold'>Login Into Your Memo</p>
                <Image src={logo}></Image>
                <Register />
                <p>or</p>
                <Button variant="warning" class="me-5 ms-5"><p className='text-light fw-bold'>Continue With Google Account</p></Button>{' '}
            </section>
        </>
    )
}

export default RegisterPage;