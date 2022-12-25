import React, { useState } from 'react';
import Options from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.trunc((good / countTotal()) * 100);
  };

  const onLeaveFeedback = element => {
    switch (element) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        setBad(prev => prev + 1);
    }
  };

  const total = countTotal();
  const positivePercentage = countPositivePercentage();

  return (
    <Section title="Please leave ">
      <Options options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  );
};

export default App;
