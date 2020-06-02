import React, { useRef } from 'react';

import { Container } from './styles';

interface ICard {
  index?: string;
  selected?: string;
  title?: string;
  text?: string;
  footer?: string;
  handleSelect?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.FC<ICard> = (params) => {
  const placeholder = useRef<HTMLDivElement>(null);
  const { title, text, footer, index, selected, handleSelect } = params;
  return (
    <Container
      style={
        index && selected && index === selected ? { background: '#573b03' } : {}
      }
    >
      <div id={index} className="placeholder" onClick={handleSelect}>
        <header className="card">{title}</header>
        <div className="content">{text}</div>
        <div>{footer}</div>
      </div>
    </Container>
  );
};

export default Card;
