import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import "./CardText.scss";

function CardText({ ids }) {
 const texts = useSelector(state => state.text.texts);

  // Filtrar los textos basados en los IDs proporcionados
  const filteredTexts = texts.filter(text => ids.includes(text.id));

 return (
    <div>
       <Card className='cardText'>
      {filteredTexts.map((currentText, index) => (
        <div key={currentText.id} className={`card-item-${index}`}>
          <Card.Img variant="top" src={currentText.image} />
          <Card.Body>
            <Card.Text className='mt-5 text-justify'>
              {currentText.description}
            </Card.Text>
          </Card.Body>
        </div>
      ))}
      </Card>
    </div>
 );
}

// Agrega la validación de prop-types
CardText.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
 };
export default CardText;
   
