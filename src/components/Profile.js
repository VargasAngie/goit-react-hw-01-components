// import PropTypes from 'prop-types'

import {
  ProfileContainer,
  Avatar,
  Name,
  Description,
  StatsList,
  StatsListItem,
  Label,
  Quantity,
} from './ProfileStyled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <div>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Description>@{tag}</Description>
      <Description>{location}</Description>
    </div>

    <StatsList>
      <StatsListItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsListItem>
      <StatsListItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsListItem>
    </StatsList>
  </ProfileContainer>
);

export default Profile;
