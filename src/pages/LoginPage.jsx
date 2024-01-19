import { Container, Form, Image } from "react-bootstrap";
import Login from '../../static/images/login.png'
import FormLogin from "../components/FormLogin";
import '../../static/css/style.css'

const LoginPage = () => {
    return (
        <>
            <Container>
                <br>
                </br>
                <br>
                </br>
                <div className="judul">
                    <h3 className="fw-bold">Memo11</h3>
                    <br></br>
                    <h5>Log in to your memo</h5>
                </div>
                <div className="gambar">
                    <Image src={Login}></Image>
                </div>
                <div className="form text-center">
                    <FormLogin/>
                </div>
                <br />
                <p class="sign fw-bold">if you doesn't have an account please <a href="/register" className="fw-bold">sign up</a></p>
            </Container>
        </>
    )
}

export default LoginPage;