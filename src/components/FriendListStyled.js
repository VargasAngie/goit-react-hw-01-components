import styled from 'styled-components';

const FriendListUl = styled.ul`
  padding: 0;
  text-align: center;
`;

const FriendListItem = styled.li`
  display: flex;
  width: 400px;
  background-color: #ffff;
  justify-content: flex-start;
  margin: 0 auto;
  border: solid 1px #a2a6ab;
`;

const Name = styled.p`
  font-size: 20px;
  font-weigth: 600;
`;

export { FriendListItem, FriendListUl, Name };
