import React from 'react';
import styled from 'styled-components';
import media from '../theme/media-query';

const ParticipationForm = () => {
  return (
    <ParticipationFormWrapper>
      <InputForm type="text" placeholder="Name" />
      <InputForm type="text" placeholder="Last Name" />
      <InputForm type="text" placeholder="Participation" />
      <SendButton>SEND</SendButton>
    </ParticipationFormWrapper>
  );
};

const ParticipationFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputForm = styled.input`
  padding: 0 1.3rem;
  width: 240px;
  margin-right: 1.8rem;
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  height: 54px;
  font-size: 0.8rem;

  ${media.phone`
    margin-top: 1rem;
     margin-right: 0;
    `};
`;

const SendButton = styled.a`
  border: 2px solid white;
  border-radius: 2px;
  height: 52px;
  display: flex;
  align-items: center;
  width: 180px;
  color: white;
  font-weight: bold;
  justify-content: center;
  ${media.phone`
    margin-top: 1rem;
    `};

  &:active {
    background-color: #00a5cb;
  }
`;

export default ParticipationForm;
