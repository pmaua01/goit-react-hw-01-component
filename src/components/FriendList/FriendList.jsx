import { FriendListItem } from "components/FriendListItem/FriendListItem";

import { FriendListStyle } from "./FriendList.styled";

import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
