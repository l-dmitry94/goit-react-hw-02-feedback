import { Component } from 'react';
import Statistics from 'components/App/Statistics/Statistics';
import FeedbackOptions from 'components/App/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Feedback, FeedbackWrapper } from './App.styled';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleLeaveFeedback = e => {
        const feedback = e.target.textContent.toLowerCase();

        this.setState(prevState => ({
            [feedback]: prevState[feedback] + 1,
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
                    <Section title="Please, leave feedback" tag="h1">
                        <FeedbackOptions
                            options={['Good', 'Neutral', 'Bad']}
                            onLeaveFeedback={this.handleLeaveFeedback}
                        />
                    </Section>
                    <Section title="Statistics" tag="h2">
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
                    </Section>
                </FeedbackWrapper>
            </Feedback>
        );
    }
}

export default App;
