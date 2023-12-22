import { Component } from 'react';
import './app.css';
import Statistics from 'components/App/Statistics/Statistics';
import FeedbackOptions from 'components/App/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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
            <div className="feedback">
                <div className="feedback__wrapper">
                    <Section title="Please, leave feedback">
                        <FeedbackOptions options={this.options} />

                        <div className="feedback__statistics">
                            <h2 className="feedback__statistics-title">Statistics</h2>
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
                        </div>
                    </Section>
                </div>
            </div>
        );
    }
}

export default App;
