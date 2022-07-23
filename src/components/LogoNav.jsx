import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";

function LogoNav() {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fs-3'>
                        <a href="https://github.com/fatihcaliss"><img
                            alt="logo"
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-3"
                        /></a>Countries App
                    </Navbar.Brand>
                </Container>
            </Navbar>
    );
}

export default LogoNav;