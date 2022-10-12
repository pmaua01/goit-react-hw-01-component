import styled from "styled-components";

export const Table = styled.table`
  font-size: 30px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  margin-left: 15px;
`;
export const Thead = styled.thead``;

export const Th = styled.th`
  background: #bcebdd;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  padding: 10px 20px;

  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
`;
export const Td = styled.td`
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  padding: 10px 20px;
`;

export const Tr = styled.tr`
  background: #f8e391;
  
  :nth-child(2n) {
  background-color: orange;

`;
