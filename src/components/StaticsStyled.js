import styled from 'styled-components';

const StatisticsSection = styled.section`
  background-color: #ffff;
  margin: 0 auto;
  width: 400px;
  padding: 10px 0;
  border: solid 1px #a2a6ab;
  border-radius: 10px;
`;
const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: #4f4f4f;
`;
const StatList = styled.ul`
  display: flex;
  margin: 0;
  justify-content: space-around;
  background-color: #14afde;
  padding: 0;
`;

const StatListLi = styled.li`
  display: flex;
  flex-direction: column;
  color: #ffff;
  padding: 10px;
`;

const Percentaje = styled.span`
  font-size: 20px;
`;
 
export { StatisticsSection, Title, StatList, StatListLi, Percentaje };
