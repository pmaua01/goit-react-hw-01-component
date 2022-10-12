import PropTypes from "prop-types";
import { Thead, Table, Th, Td, Tr } from "./TransactionHistory.styled";

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

//   return items.map(({ id, type, amount, currency })
