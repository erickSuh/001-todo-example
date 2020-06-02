import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(52, 53, 94, 0.35);
  z-index: 10;

  .select-container {
    width: 101%;
    border-color: none;
    color: black;
    font-family: ${(props) => props.theme.font.family};
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #280229;
    width: 30%;
    min-width: 300px;

    .label {
      display: flex;
      justify-content: start;
      width: 100%;
    }

    .modal-header {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;

      .material-icons {
        cursor: pointer;
      }
    }

    .modal-content {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .input-title {
        width: 100%;
        margin-bottom: 3%;
        font-family: ${(props) => props.theme.font.family};
        border-radius: 4px;
        padding: 4px;
      }

      .input-text {
        width: 100%;
        margin-bottom: 3%;
        font-family: ${(props) => props.theme.font.family};
        resize: none;
        border-radius: 4px;
        padding: 4px;
      }
    }
  }
`;
