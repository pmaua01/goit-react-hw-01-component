import PropTypes from "prop-types";

import {
  ProfileCard,
  ProfileInfo,
  AvatarThumb,
  ProfileName,
  ProfileTag,
  ProfileStats,
  ProfileStatsList,
  AvatarFoto,
  StatsTitle,
  StatsCount,
} from "./Profiles.styled";

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  const { followers, views, likes } = stats;

  return (
    <ProfileCard>
      <ProfileInfo>
        <AvatarThumb>
          <AvatarFoto src={avatar} alt="User avatar" />
        </AvatarThumb>
        <ProfileName>{username}</ProfileName>

        <ProfileTag>@{tag}</ProfileTag>
        <ProfileTag>{location}</ProfileTag>
      </ProfileInfo>

      <ProfileStats>
        <ProfileStatsList>
          <StatsTitle>Followers</StatsTitle>
          <StatsCount>{followers}</StatsCount>
        </ProfileStatsList>
        <ProfileStatsList>
          <StatsTitle>Views</StatsTitle>
          <StatsCount>{views}</StatsCount>
        </ProfileStatsList>
        <ProfileStatsList>
          <StatsTitle>Likes</StatsTitle>
          <StatsCount>{likes}</StatsCount>
        </ProfileStatsList>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
