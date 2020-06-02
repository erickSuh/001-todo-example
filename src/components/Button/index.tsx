import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { container } from './styles';

export interface IButton {
  label?: string;
  icon?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  customColor?: string;
}

const Button: React.FC<IButton> = (params) => {
  const { label, icon, onClick, customColor } = params;

  //TODO Remove to styles.ts in future
  const Container = container(customColor || '');

  return (
    <Container>
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    </Container>
  );
};

export default Button;
