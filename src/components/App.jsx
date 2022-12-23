import React, {useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback)

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc(feedback.good / countTotalFeedback() * 100);
  }

  const onLeaveFeedback = element => {
    setFeedback(state => {
      return {
        ...state,
        [element]: state[element] + 1,
      };
    });
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  );
};

export default App;
