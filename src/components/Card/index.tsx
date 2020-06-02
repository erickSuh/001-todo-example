import React from 'react';

import { Container } from './styles';

interface ICard {
  title?: string;
  text?: string;
  footer?: string;
}

const Card: React.FC<ICard> = (params) => {
  const { title, text, footer } = params;
  return (
    <Container>
      <header className="card">{title}</header>
      <div className="content">{text}</div>
      <div>{footer}</div>
    </Container>
  );
};

export default Card;
