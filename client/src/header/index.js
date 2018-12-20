import React, { Component } from 'react';
import styled from 'styled-components';
import ParticipationForm from './participation.form';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <ParticipationForm />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  background-color: #00b8e2;
  padding: 3rem 0 2rem 0;
`;

export default Header;
