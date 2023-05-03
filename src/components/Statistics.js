import {
  StatisticsSection,
  Title,
  StatList,
  StatListLi,
  Percentaje,
} from './StaticsStyled';

const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(item => (
        <StatListLi key={item.id}>
          <span>{item.label}</span>
          <Percentaje>{item.percentage}%</Percentaje>
        </StatListLi>
      ))}
    </StatList>
  </StatisticsSection>
);

export default Statistics;
