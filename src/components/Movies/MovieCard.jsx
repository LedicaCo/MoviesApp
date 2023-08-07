import '../../assets/css/movieCard.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, selectMovie }) => {

    const { name, image } = movie;

    const isLong = movie.synopsis.length > 120;

    const synopsis = !isLong ? movie.synopsis : movie.synopsis.slice(0, 120)+"..."

    const navigate = useNavigate();

    return (
        <Col>
            <Card className='movie-card'
                style={{height: "100%", cursor: "pointer"}}
                onClick={() => navigate(`/movies/${movie.id}`)}
            >
                <Card.Img variant="top" src={image} style={{height: 300, objectFit: "cover"}} />
                <Card.Body className='card-body'>
                    <Card.Title className='movie-title'>{name}</Card.Title>
                    <Card.Text className='card-text'>
                        {synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;