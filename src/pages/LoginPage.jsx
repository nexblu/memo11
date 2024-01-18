import { Image, Button } from 'react-bootstrap'
import logo from '../../static/images/gbr.png';
import FormLogin from '../components/FormLogin';

const LoginPage = () => {
    return (
        <>
            <section className="login jumbotron text-center pt-3">
                <h3 className='fw-bold'>Memo 11</h3>
                <p className='fw-bold'>Login Into Your Memo</p>
                <Image src={logo}></Image>
                <FormLogin />
                <p>or</p>
                <Button variant="warning" class="me-5 ms-5"><p className='text-light fw-bold'>Continue With Google Account</p></Button>{' '}
                <p className='mt-2'>DONT HAVE ANT ACCOUNT? <a href="/register">SIGN UP</a></p>
            </section>
        </>
    )
}

export default LoginPage;