import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTexts } from '../../acctions/acctionsText'; // Asegúrate de que la ruta sea correcta

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardText = () => {
  const dispatch = useDispatch();
  const texts = useSelector(state => state.texts.texts); // Ajusta la ruta según la estructura de tu estado Redux

  useEffect(() => {
    if (texts.length === 0) {
      dispatch(fetchTexts());
    }
  }, [dispatch]);

  return (
    <>
      {texts.map((text) => (
        <Card key={text.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={text.image_path} />
          <Card.Body>
            <Card.Title>{text.title}</Card.Title>
            <Card.Text>
              {text.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardText;



// import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function CardText({ ids }) {
//   const text = useSelector((state) => state.text);

//   console.log('Datos del store:', text);

//  return (
//   <>
//     {text && text.filter((t) => ids.includes(t.id)).map((text) => (
//       <Card key={text.id} style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={text.image_path} />
//         <Card.Body>
//           <Card.Title>{text.title}</Card.Title>
//           <Card.Text>
//             {text.description}
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     ))}
//   </>
// );
//     }



// export default CardText;

//esto se debe poner en las vistas 
// import CardText from './CardText';

// function View1() {
//   return <CardText ids={[1, 2, 3]} />;
// }

// function View2() {
//   return <CardText ids={[4, 5, 6]} />;
// }
