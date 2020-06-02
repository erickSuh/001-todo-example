import React from 'react';
import Button from '~/components/Button';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface IInputModal {
  isOpen: boolean;
  isEdit?: boolean;
  title?: string;
  inputTitle?: string;
  text?: string;
  handleTitleChange?: Function;
  handleTextChange?: Function;
  handleTogle?: Function;
  handleConfirm?: Function;
}

const InputModal: React.FC<IInputModal> = (params) => {
  const { isOpen, isEdit } = params;
  const theme = useTheme();

  const getText = () => {
    if (isEdit) {
      return 'Edit Card';
    }

    return 'New Card';
  };

  return isOpen ? (
    <Container>
      <div className="modal-container">
        <header className="modal-header">
          <span className="material-icons">close</span>
        </header>
        <div className="modal-content">
          <h3>Titulo</h3>
          <input className="input-title" />
          <textarea className="input-text" />
          <Button label="Save" customColor={theme.colors.success} />
        </div>
      </div>
    </Container>
  ) : null;
};

export default InputModal;
