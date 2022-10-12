import { FriendListItem } from "components/FriendListItem/FriendListItem";

import { FriendListStyle } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </FriendListStyle>
  );
};