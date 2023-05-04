import styled from 'styled-components';

const TransactionTable = styled.table`
  margin: 0 auto;
  width: 400px;
`;

const TransactionTableHead = styled.thead`
  color: #ffff;
  background-color: #14afde;
  text-transform: uppercase;
`;

const TransactionTableBody = styled.tbody`
  color: #a2a6ab;
  background-color: #ffff;
  text-align: center;
`;

export { TransactionTable, TransactionTableBody, TransactionTableHead };
