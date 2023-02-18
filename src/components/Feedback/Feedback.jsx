import { Component } from 'react';
import Statistics from './FeedbackItem/Statistics';
import FeedbackOptions from './FeedbackItem/FeedbackOptions';
import Notification from './FeedbackItem/Notification';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const positiveFeedback = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positiveFeedback;
  }
  response = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <section>
        <h2>Please leave feedback</h2>
        <div>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.response}
          />
          {total !== 0 ? (
            <h3>Statistics</h3>
          ) : (
            <Notification message="There is no feedback" />
          )}
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      </section>
    );
  }
}

export default Feedback;
