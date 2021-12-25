import React from 'react';
import { Container, Image, RightView, Title, IconsView, Icon } from './styles';

const AnnounceSimpleCard = ({ image, title, iconName }) => {
  return (
    <Container>
      <Image source={{uri: image}} />
      <RightView>
        <Title>{title}</Title>
        <IconsView>
          <Icon name="sharealt" />
          <Icon name={iconName} />
        </IconsView>
      </RightView>
    </Container>
  );
};

export default AnnounceSimpleCard;
