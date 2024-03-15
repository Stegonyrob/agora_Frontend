import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function CardPosts() {
     const posts = useSelector(state => state.posts);
  
console.log(posts)

    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     
     {Array.isArray(posts) && posts.map((post, index) => (
            
                <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{posts.title}</Card.Title>
                        <Card.Text>{posts.message}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Creado el: {posts.creation_date}</ListGroup.Item>
                        <ListGroup.Item>Nombre del post: {posts.postname}</ListGroup.Item>
                        <ListGroup.Item>ID del usuario: {posts.user_id}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
}

export default CardPosts;


