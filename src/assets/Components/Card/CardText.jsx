
import { useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';

function CardText() {
  const texts = useSelector(state => state.texts.texts);
  const textIndex = useSelector(state => state.texts.textIndex);

  const currentText = texts[textIndex] || {};

 return (
    <Card key={currentText.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={currentText.image} />
      <Card.Body>
        <Card.Text>
          {currentText.description}
        </Card.Text>
      </Card.Body>
    </Card>
 );
}

export default CardText;
   
