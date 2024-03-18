import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/login', {
        auth: {
          username: username,
          password: password,
        }
      });

      console.log(response.data);

      let redirectPath = '/';
      if (response.data.role === 'ROLE_ADMIN') {
        redirectPath = '/admin';
      } else if (response.data.role === 'ROLE_USER') {
        redirectPath = '/list';
      }

      navigate(redirectPath);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Inicio de Sesión</Card.Title>
        <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="primary" onClick={login}>Enviar</Button>
      </Card.Body>
      <Card.Footer className="text-center">No tienes cuenta <a href="/register">Regístrate Aquí</a></Card.Footer>
    </Card>
  );
}

export default LoginForm;
