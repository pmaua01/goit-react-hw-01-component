import PropTypes from "prop-types";
import { FriendListItemStyled, Status, Avatar } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <FriendListItemStyled key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
