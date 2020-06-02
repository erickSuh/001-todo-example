import React from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export interface ICardList {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  customColor?: string;
}

const CardList: React.FC<ICardList> = (params) => {
  const theme = useTheme();
  const { children, title, subTitle, customColor } = params;
  return (
    <Container customColor={customColor}>
      <header className="list-header">{title}</header>
      <span className="list-sub">{subTitle}</span>
      <div className="content">{children}</div>
    </Container>
  );
};

export default CardList;
