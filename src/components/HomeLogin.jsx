import { Image, Button } from 'react-bootstrap'
import logo from '../../static/images/gbr.png';
import FormLogin from './FormLogin';

const HomeLogin = () => {
    return (
        <>
            <section className="login jumbotron text-center pt-3">
                <h3 className='fw-bold'>Memo 11</h3>
                <p className='fw-bold'>Login Into Your Memo</p>
                <Image src={logo}></Image>
                <FormLogin/>
                <p>or</p>
                <button type="button" class="btn btn-warning me-5 ms-5"><p className='text-light fw-bold'>Continue With Google Account</p></button>
                <p className='mt-2'>DONT HAVE ANT ACCOUNT? <a href="">SIGN UP</a></p>
            </section>
        </>
    )
}

export default HomeLogin;