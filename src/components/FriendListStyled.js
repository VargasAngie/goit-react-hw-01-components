import styled from 'styled-components';

const FriendListUl = styled.ul`
  padding: 0;
  text-align: center;
`;

const FriendListItem = styled.li`
  display: flex;
  width: 400px;
  background-color: #ffff;
  align-content: center;
  margin: 0 auto;
  border: solid 1px #a2a6ab;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weigth: 600;
  margin-left: 10px;
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  border: solid 1px #a2a6ab;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin: 10px;
`;

export { FriendListItem, FriendListUl, Name, Status };
