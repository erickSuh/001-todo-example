import styled from 'styled-components';

import { ICustomColorTheme } from '~/types';

export const Container = styled.div`
  .btn {
    border: 1px solid ${(props: ICustomColorTheme) => props.customColor};
    border-radius: 5px;
    font-family: ${(props) => props.theme.font.family};
    font-size: inherit;
    background: none;
    cursor: pointer;
    padding: 14px 20px;
    display: inline-block;
    margin: 12px 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    outline: none;
    position: relative;
    transition: all 0.3s;

    background: inherit;
    color: ${(props) => props.theme.colors.text};

    :hover {
      opacity: 0.8;
      background: ${(props: ICustomColorTheme) => props.customColor};
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
