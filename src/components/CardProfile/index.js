import React from 'react';
import { Card } from 'react-bootstrap';

function CardProfile({ src, title, text }) {
  return (
    <Card className="card-container" style={{ width: "10rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardProfile;