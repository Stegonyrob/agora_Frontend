import { useEffect, useRef } from 'react';
import logo from '../../img/agoraLogo.png';
import './Logo.scss'; 
const Logo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = '30px Arial';
      context.fillText('Click Me!!!', offsetX, offsetY);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="logo-container">
      <img className="logo-image" src={logo} alt="Logo" />
      <canvas
        ref={canvasRef}
        width={250}
        height={250}
        className="logo-canvas"
      />
    </div>
  );
};

export default Logo;
