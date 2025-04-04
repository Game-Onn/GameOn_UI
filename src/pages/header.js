import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../image/gameOnlo.png'

function Header() {
  return (
    <>
      <Navbar sticky='top' bg='dark' data-bs-theme="dark" className='mb-5'>
        <Container>
          <Navbar.Brand href="#">
            <h4><b>GameOn</b></h4>
          </Navbar.Brand>
        </Container>
      </Navbar> 
    </>
  );
}

export default Header;