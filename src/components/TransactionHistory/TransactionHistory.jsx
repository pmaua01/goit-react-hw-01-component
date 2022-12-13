import { Thead, Table, Th, Td, Tr } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr key={items.id}>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  // items: PropTypes.array,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
//   return items.map(({ id, type, amount, currency })
