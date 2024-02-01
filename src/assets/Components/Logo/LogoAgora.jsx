
import logo from '../../img/agoraLogo.png';

const Logo = () => {
 const logoStyle = {
    width: '15rem',
    height: '15rem',
    borderRadius: '30rem',
    position: 'relative' 
 };


 

 

 return (
    <div >
      <img style={logoStyle}src={logo} alt="Logo" />
      
      
    </div>
 );
};

export default Logo;
