import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import gameon from '../image/Game.png'


function Login() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Container className='pt-3 '>
                        <Image 
                        src={gameon}
                        height="200px"
                        rounded />
                    </Container>
                </Col>
                <Col>
                    <Container className='pt-5 pb-5 bg-dark text-white'>
                        <Form>
                            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                                <Form.Control type='number' placeholder='Phone Number' name='username'/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                                <Form.Control type='password' placeholder='Passowrd' name='password'/>
                            </Form.Group>
                            <Form.Group  controlId='exampleForm.ControlTextarea1'>
                                <Button variant='secondary'  type='submit'> Login </Button>
                            </Form.Group>
                        </Form>
                    </Container>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Login;