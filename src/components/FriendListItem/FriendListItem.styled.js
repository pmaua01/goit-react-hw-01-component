import styled from "styled-components";

export const FriendListItemStyled = styled.li`
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.status ? "green" : "red")};
  margin-right: 15px;
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;
