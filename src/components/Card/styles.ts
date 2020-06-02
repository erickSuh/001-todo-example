import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 2 * padding);
  min-width: 150px;
  box-shadow: 0 0 0.3em orangered;
  border-radius: 5px;
  padding: 12px;
  margin: 12px;

  /* not necessary but in the future can be */
  display: flex;
  flex-direction: column;

  .card {
    font-size: 24px;
    font-weight: bold;

    margin-bottom: 0.5rem;
  }

  .content {
    margin-bottom: 0.5rem;
  }
`;
