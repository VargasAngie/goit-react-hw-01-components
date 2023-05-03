import { FriendListItem, FriendListUl, Name } from './FriendListStyled';

const FriendList = ({ friends }) => (
  <FriendListUl>
    {friends.map(item => (
      <FriendListItem key={item.id}>
        <span class="status">{item.isOnline}</span>
        <img  src={item.avatar} alt="User avatar" width="48" />
        <Name>{item.name}</Name>
      </FriendListItem>
    ))}
  </FriendListUl>
);

export default FriendList;
