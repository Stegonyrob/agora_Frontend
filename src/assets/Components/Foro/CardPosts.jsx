import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPosts = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
    const fetchPosts = async () => {
      const myHeaders = {
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
        "Cookie": "JSESSIONID=F825B23F567367454B49092AC58F5A81"
      };

      try {
        const response = await axios.get('http://localhost:8080/api/v1/posts', { headers: myHeaders });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
 }, []);
    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {posts.map((post, index) => (
                <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.message}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Creado el: {post.creation_date}</ListGroup.Item>
                        <ListGroup.Item>Nombre del post: {post.postname}</ListGroup.Item>
                        <ListGroup.Item>ID del usuario: {post.user_id}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
}

export default CardPosts;


