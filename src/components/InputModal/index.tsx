import React from 'react';
import Button from '~/components/Button';
import { useTheme } from 'styled-components';
import Select from 'react-select';

import { Container } from './styles';

import { statusByName } from '~/utils/status';

import { TypeOption } from '~/types';

interface IInputModal {
  isOpen: boolean;
  isEdit?: boolean;
  title?: string;
  text?: string;
  status?: TypeOption;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleStatusChange: any;
  handleTogle?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  handleConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const InputModal: React.FC<IInputModal> = (params) => {
  const {
    isOpen,
    isEdit,
    title,
    handleTitleChange,
    text,
    status,
    handleTextChange,
    handleStatusChange,
    handleTogle,
    handleConfirm,
  } = params;
  const theme = useTheme();

  const getText = () => {
    if (isEdit) {
      return 'Edit Card';
    }

    return 'New Card';
  };

  const getOptions = () => {
    const options = statusByName.map((o) => ({
      value: o.index,
      label: o.text,
    }));
    if (options) {
      return options;
    }
    return [];
  };

  return isOpen ? (
    <Container>
      <div className="modal-container">
        <header className="modal-header">
          <span className="material-icons" onClick={handleTogle}>
            close
          </span>
        </header>
        <div className="modal-content">
          <h3>{getText()}</h3>
          <span className="label">Title</span>
          <input
            className="input-title"
            value={title}
            onChange={handleTitleChange}
          />

          <span className="label">Text:</span>
          <textarea
            id="input-text"
            className="input-text"
            rows={10}
            value={text}
            onChange={handleTextChange}
          />

          <span className="label">Status:</span>
          <div className="select-container">
            <Select
              options={getOptions()}
              onChange={handleStatusChange}
              value={status}
            />
          </div>
          <Button
            label="Save"
            customColor={theme.colors.success}
            onClick={handleConfirm}
          />
        </div>
      </div>
    </Container>
  ) : null;
};

export default InputModal;
