import PropTypes from 'prop-types';

import {
  TransactionTable,
  TransactionTableBody,
  TransactionTableHead,
} from './TransactionHistoryStyled';

const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TransactionTableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TransactionTableHead>

    <TransactionTableBody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </TransactionTableBody>
  </TransactionTable>
);

TransactionHistory.propTypes = {
    items: PropTypes.array,
}

export default TransactionHistory;
