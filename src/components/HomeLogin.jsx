import { Image } from 'react-bootstrap'
import logo from '../../static/images/gbr.png';

const HomeLogin = () => {
    return (
        <>
            <section className="login jumbotron text-center pt-3">
                <h3 className='fw-bold'>Memo 11</h3>
                <p className='fw-bold'>Login Into Your Memo</p>
                <Image src={logo}></Image>
            </section>
        </>
    )
}

export default HomeLogin;