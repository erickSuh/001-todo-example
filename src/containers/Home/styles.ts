import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .home-header {
    display: flex;
    flex-direction: row;
  }

  .home-content {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
    margin: 12px;
    flex-direction: row;
    width: calc(100% - 2 * 12px);
  }

  @media screen and (max-width: 640px) {
    .home-content {
      display: flex;
      margin: 12px;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 640px) {
    .home-content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 12px;
      margin: 12px;
      flex-direction: row;
      width: calc(100% - 2 * 12px);
    }
  }
`;
