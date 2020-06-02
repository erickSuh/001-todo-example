import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { Container } from './styles';

export interface IButton {
  label?: string;
  icon?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  customColor?: string;
}

const Button: React.FC<IButton> = (params) => {
  const { label, icon, onClick, customColor } = params;

  return (
    <Container customColor={customColor}>
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    </Container>
  );
};

export default Button;
