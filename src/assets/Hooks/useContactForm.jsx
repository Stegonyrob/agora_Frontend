import { useState } from 'react';

const useContactForm = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí es donde se produce el efecto secundario: enviamos la información del formulario
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    // Limpiamos el formulario después de enviar la información
    setName('');
    setEmail('');
    setMessage('');
 };

 return { name, email, message, handleSubmit, setName, setEmail, setMessage };
};

export default useContactForm;
