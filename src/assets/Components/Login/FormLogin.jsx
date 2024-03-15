import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'; 
import './FormLogin.scss'; 
function LoginForm() {
  return (
    <Card className="text-center">
        <Card.Body>
        <Card.Title>Inicio de Sesión</Card.Title>
        <FloatingLabel  controlId="floatingInput"
        label="Email address"  className="mb-3"   >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
        <Button variant="primary">Enviar</Button>
      </Card.Body>
      <Card.Footer className="text-center">No tienes cuenta <a href="/register">Registrate Aquí</a></Card.Footer>
    </Card>
  );
}

export default LoginForm;