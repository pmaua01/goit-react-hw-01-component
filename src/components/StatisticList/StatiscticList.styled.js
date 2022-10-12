import styled from "styled-components";

export const StatiscticListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const random = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatiscticListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  padding-left: ${(p) => p.theme.space[4]}px;
  padding-right: ${(p) => p.theme.space[4]}px;
  background-color: ${random};
`;
