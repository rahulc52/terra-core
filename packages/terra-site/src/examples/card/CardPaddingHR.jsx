import React from 'react';
import Card from 'terra-card';

const CardPaddingHR = () => (
  <div>
    <Card>
      <Card.Body>Hello World Above The Line!!</Card.Body>
      <hr />
      <Card.Body>Hello World Bellow The Line!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingHR;
