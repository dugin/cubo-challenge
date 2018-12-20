import React from 'react';
import styled from 'styled-components';

const Table = () => {
  return (
    <table>
      <TableRow>
        <TableHeader style={{ width: 40 }} />
        <TableHeader>First Name</TableHeader>
        <TableHeader>Last Name</TableHeader>
        <TableHeader>Participation</TableHeader>
      </TableRow>
      <TableRow>
        <TableData style={{ width: 40 }}>1</TableData>
        <TableData>Carlos</TableData>
        <TableData>Moura</TableData>
        <TableData>5%</TableData>
      </TableRow>
    </table>
  );
};

const TableWrapper = styled.table``;

const TableData = styled.td`
  border: 1px solid #dddddd;
  width: 150px;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 0.5rem;
`;
const TableHeader = styled(TableData)`
  text-align: left;
  font-weight: bold;
`;
const TableRow = styled.tr``;

export default Table;
