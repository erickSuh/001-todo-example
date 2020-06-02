import styled from 'styled-components';
import { ICustomColorTheme } from '~/types';

export const Container = styled.div`
  height: calc(100% - 2 * padding);
  width: 100%;
  min-width: 160px;
  box-shadow: 0 0 0.3em orangered;
  border-radius: 5px;
  margin-bottom: 12px;

  /* not necessary but in the future can be */
  display: flex;
  flex-direction: column;

  .list-header {
    margin: 12px;
    font-size: 24px;
    font-weight: bold;

    margin-bottom: 0.5rem;
    color: ${(props: ICustomColorTheme) => props.customColor};
  }

  .list-sub {
    margin: 0 12px;
    margin-bottom: 12px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`;
