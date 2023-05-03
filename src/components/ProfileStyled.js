import styled from "styled-components";

const ProfileContainer = styled.div`
  margin: 30px auto;
  border: solid 1px #a2a6ab;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  background-color: #fff;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
`;

const Name = styled.p`
  font-size: 30px;
  font-weigth: 700;
`;

const Description = styled.p`
  color: #a2a6ab;
  font-size: 16px;
`;

const StatsList = styled.ul`
  display: flex;
  padding: 16px;
  margin: 0;
  justify-content: space-around;
  border-top: solid 1px #a2a6ab;
  background-color: #f2f0f0;
`;

const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alig-items: center;
`;

const Label = styled.span`
  color: #a2a6ab;
`;

const Quantity = styled.span`
  font-weigth: 700;
`;

export { ProfileContainer, Avatar, Name, Description, StatsList, StatsListItem, Label, Quantity }; 