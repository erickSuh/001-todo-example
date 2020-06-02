import React, { useState, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import Card from '~/components/Card';
import CardList from '~/components/CardList';
import Button from '~/components/Button';
import InputModal from '~/components/InputModal';

import { Container } from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleModalOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Container>
      <InputModal isOpen={isModalOpen} />
      <div className="home-header">
        <Button
          label="Add"
          customColor={theme.colors.success}
          onClick={handleModalOpen}
        />
        <Button label="Edit" customColor={theme.colors.warning} />
        <Button label="Remove" customColor={theme.colors.danger} />
      </div>
      <div className="home-content">
        <CardList
          title="To-Do"
          subTitle="Subtitle test"
          customColor={theme.colors.danger}
        >
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card />
          <Card />
        </CardList>
        <CardList
          title="Doing"
          subTitle="Subtitle test"
          customColor={theme.colors.warning}
        >
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card />
          <Card />
        </CardList>
        <CardList
          title="Done"
          subTitle="Subtitle test"
          customColor={theme.colors.success}
        >
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card
            title="header teste"
            text="body de teste bem grande 123456 texto de lorem ipsun"
          />
          <Card />
          <Card />
        </CardList>
      </div>
    </Container>
  );
};

export default Home;
