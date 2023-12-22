import { Component } from 'react';
import Statistics from 'components/App/Statistics/Statistics';
import FeedbackOptions from 'components/App/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Feedback, FeedbackStatistics, FeedbackTitle, FeedbackWrapper } from './App.styled';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;

        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, bad, neutral } = this.state;
        if (good === 0) return 0;

        return Number(((good / (good + neutral + bad)) * 100).toFixed());
    };

    options = {
        onGood: this.handleGood,
        onNeutral: this.handleNeutral,
        onBad: this.handleBad,
    };

    render() {
        const { good, bad, neutral } = this.state;
        return (
            <Feedback>
                <FeedbackWrapper>
                    <Section title="Please, leave feedback">
                        <FeedbackOptions options={this.options} />

                        <FeedbackStatistics>
                            <FeedbackTitle>Statistics</FeedbackTitle>
                            {this.countTotalFeedback() ? (
                                <Statistics
                                    good={good}
                                    neutral={neutral}
                                    bad={bad}
                                    total={this.countTotalFeedback()}
                                    positivePercentage={this.countPositiveFeedbackPercentage()}
                                />
                            ) : (
                                <Notification message="There is no feedback" />
                            )}
                        </FeedbackStatistics>
                    </Section>
                </FeedbackWrapper>
            </Feedback>
        );
    }
}

export default App;
