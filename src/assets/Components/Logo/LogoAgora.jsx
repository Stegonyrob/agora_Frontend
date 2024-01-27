
import logo from '../../img/agoraLogo.png';

const Logo = () => {
 const logoStyle = {
    width: '15rem',
    height: '15rem',
    borderRadius: '30rem',
    position: 'relative' 
 };

 const chatIconStyle = {
    position: 'absolute', // Coloca el icono en una posición absoluta dentro del contenedor
    top: '40%', // Centra verticalmente el icono
    left: '85%', // Centra horizontalmente el icono
    transform: 'translate(-50%, -50%)', // Corrige la posición del icono
    color: 'yellow', // Cambia el color del icono a amarillo
    fontSize: '5rem', // Aumenta el tamaño del icono
    transition: 'color 0.3s ease', // Agrega una transición suave al color
    cursor: 'pointer', // Cambia el cursor a un puntero cuando se pasa sobre el icono
    
    };

 const chatIconHoverStyle = {
    color: 'purple' 
 };
 const chatIconTextStyle = {
   position: 'absolute', // Coloca el texto en una posición absoluta dentro del contenedor
   top: '40%', // Centra verticalmente el texto
   left: '80%', // Centra horizontalmente el texto
   transform: 'translate(-50%, -50%)', // Corrige la posición del texto
   color: 'red', // Cambia el color del texto a rojo
   fontSize: '0.7rem', // Ajusta el tamaño del texto
   textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' ,
  
};
 return (
    <div >
      <img style={logoStyle}src={logo} alt="Logo" />
      <i 
        className="bi bi-chat" 
        style={chatIconStyle} 
        onMouseOver={(e) => e.currentTarget.style.color = chatIconHoverStyle.color} 
        onMouseOut={(e) => e.currentTarget.style.color = chatIconStyle.color}
      >
      </i>
      <p style={chatIconTextStyle}>Click Me!!!</p>
    </div>
 );
};

export default Logo;
