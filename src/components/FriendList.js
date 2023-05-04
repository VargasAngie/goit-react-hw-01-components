import PropTypes from 'prop-types';

import { FriendListItem, FriendListUl, Name, Status } from './FriendListStyled';

const FriendList = ({ friends }) => (
  <FriendListUl>
    {friends.map(item => (
      <FriendListItem key={item.id}>
        <Status isOnline={item.isOnline} />
        <img src={item.avatar} alt="User avatar" width="48" />
        <Name>{item.name}</Name>
      </FriendListItem>
    ))}
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
