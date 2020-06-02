import React, { useState, MouseEvent, useEffect } from 'react';
import { useTheme } from 'styled-components';

import Card from '~/components/Card';
import CardList from '~/components/CardList';
import Button from '~/components/Button';
import InputModal from '~/components/InputModal';

import { Container } from './styles';

import { status, statusByName, CARDS_NAME } from '~/utils/status';

import { TypeCard, TypeOption } from '~/types';

const Home: React.FC = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [inputStatus, setInputStatus] = useState<TypeOption>({
    value: 0,
    label: 'To-Do',
  });
  const [selected, setSelected] = useState('');
  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  //TODO: Remove when implement redux
  const fetchCards = () => {
    try {
      const local = localStorage.getItem(CARDS_NAME);
      if (local) {
        const objLocal = JSON.parse(local);
        if (objLocal.data) {
          setListCards(objLocal.data);
        }
      }
    } catch (err) {
      console.log(`Error - ${err.message}`);
    }
  };

  const handleModalOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsEditing(false);
    setSelected('');
    setIsModalOpen((prev) => !prev);
  };

  const handleEdit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!selected) return;
    setIsEditing(true);
    const editCard = listCards.find(
      (card: TypeCard) => card.index === parseInt(selected)
    );
    if (editCard) {
      const { title, text, status } = editCard;
      setIsEditing(true);
      setTitle(title);
      setText(text);
      const st = statusByName.find((o) => o.index === status);
      if (st) {
        setInputStatus({ value: status, label: st.text });
      }
    }
    setIsModalOpen((prev) => !prev);
  };

  const handleSave = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!isEditing) {
      saveNew();
    } else {
      updateCard();
    }

    // Clear
    setTitle('');
    setText('');
    fetchCards();
    setIsModalOpen(false);
    setIsEditing(false);
    setSelected('');
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    deleteCard();
    setIsModalOpen(false);
    setIsEditing(false);
    setSelected('');
    fetchCards();
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleStatusChange = (event: TypeOption) => {
    setInputStatus(event);
  };

  const handleTogle = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    setTitle('');
    setText('');
    setIsModalOpen((prev) => !prev);
  };

  const getListByStatus = (stat: number) => {
    if (!listCards) return [];
    const list = listCards.filter((card: TypeCard) => card.status === stat);
    return list;
  };

  const handelSelect = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setSelected(event.currentTarget.id);
  };

  //TODO: Change to action when implements redux
  const deleteCard = () => {
    const refreshedList = localStorage.getItem(CARDS_NAME);
    if (!refreshedList) return;
    const parsedList = JSON.parse(refreshedList);
    let newList = parsedList.data.map((card: TypeCard) => {
      if (card.index === parseInt(selected)) {
        return null;
      }
    });
    newList = newList.filter((card: TypeCard) => card);
    const newObj = { ...parsedList, data: newList };
    localStorage.setItem(CARDS_NAME, JSON.stringify(newObj));
  };

  //TODO: Change to action when implements redux
  const updateCard = () => {
    const refreshedList = localStorage.getItem(CARDS_NAME);
    if (!refreshedList) return;
    const parsedList = JSON.parse(refreshedList);
    const newList = parsedList.data.map((card: TypeCard) => {
      if (card.index === parseInt(selected)) {
        return {
          ...card,
          title,
          text,
          status: inputStatus.value,
        };
      }
      return card;
    });
    const newObj = { ...parsedList, data: newList };
    localStorage.setItem(CARDS_NAME, JSON.stringify(newObj));
  };

  //TODO: Change to actions when implements redux
  const saveNew = () => {
    const cards = localStorage.getItem(CARDS_NAME);
    if (!cards) {
      localStorage.setItem(
        CARDS_NAME,
        JSON.stringify({
          data: [
            {
              index: 0,
              title,
              text,
              status: inputStatus.value,
            },
          ],
        })
      );
      return;
    }

    const objCards = JSON.parse(cards);

    let arrIndex = objCards.data.map((card: TypeCard) => card.index);

    let maxIndex = 0;

    if (arrIndex && arrIndex.length > 0) {
      arrIndex = arrIndex.sort((a: number, b: number) => {
        if (a > b) {
          return -1;
        } else if (b > a) {
          return 1;
        }
        return;
      });

      maxIndex = arrIndex[0];
    }

    const newCards = {
      ...objCards,
      data: [
        ...objCards.data,
        {
          index: maxIndex + 1,
          title,
          text,
          status: inputStatus.value,
        },
      ],
    };

    localStorage.setItem(CARDS_NAME, JSON.stringify(newCards));
  };

  return (
    <Container>
      <InputModal
        title={title}
        text={text}
        status={inputStatus}
        handleTitleChange={handleTitleChange}
        handleTextChange={handleTextChange}
        handleStatusChange={handleStatusChange}
        handleConfirm={handleSave}
        handleTogle={handleTogle}
        isOpen={isModalOpen}
      />
      <div className="home-header">
        <Button
          label="Add"
          customColor={theme.colors.success}
          onClick={handleModalOpen}
        />
        <Button
          label="Edit"
          customColor={theme.colors.warning}
          onClick={handleEdit}
        />
        <Button
          label="Remove"
          customColor={theme.colors.danger}
          onClick={handleDelete}
        />
      </div>
      <div className="home-content">
        <CardList
          title="To-Do"
          subTitle="Subtitle test"
          customColor={theme.colors.danger}
        >
          {getListByStatus(status.TO_DO).map((card: TypeCard) => (
            <Card
              index={
                card.index || card.index === 0
                  ? card.index.toString()
                  : undefined
              }
              selected={selected}
              title={card.title}
              text={card.text}
              handleSelect={handelSelect}
            />
          ))}
        </CardList>
        <CardList
          title="Doing"
          subTitle="Subtitle test"
          customColor={theme.colors.warning}
        >
          {getListByStatus(status.DOING).map((card: TypeCard) => (
            <Card
              index={
                card.index || card.index === 0
                  ? card.index.toString()
                  : undefined
              }
              selected={selected}
              title={card.title}
              text={card.text}
              handleSelect={handelSelect}
            />
          ))}
        </CardList>
        <CardList
          title="Done"
          subTitle="Subtitle test"
          customColor={theme.colors.success}
        >
          {getListByStatus(status.DONE).map((card: TypeCard) => (
            <Card
              index={
                card.index || card.index === 0
                  ? card.index.toString()
                  : undefined
              }
              selected={selected}
              title={card.title}
              text={card.text}
              handleSelect={handelSelect}
            />
          ))}
        </CardList>
      </div>
    </Container>
  );
};

export default Home;
