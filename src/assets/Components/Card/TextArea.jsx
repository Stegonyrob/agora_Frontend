import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardText() {
 const text = useSelector((state) => state.text);

 return (
    <>
      {text.map((text) => (
        <Card key={text.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={text.path} />
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
