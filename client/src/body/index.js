import React from 'react';
import styled from 'styled-components';
import PieChart from './pie-chart';
import Table from './table';

const Body = () => {
  return (
    <BodyWrapper>
      <DataTitle>DATA </DataTitle>
      <DataSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit </DataSubTitle>

      <ContentWrapper>
        <Table />
        <PieChart />
      </ContentWrapper>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;
const DataTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  font-weight: bold;
  color: #394b50;
`;

const DataSubTitle = styled.h2`
  font-size: 1.3rem;
  color: #394b50;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 2.4rem;
`;

export default Body;
