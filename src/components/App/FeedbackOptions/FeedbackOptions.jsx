const FeedbackOptions = ({ options }) => {
    console.log(options);
    return (
        <ul className="feedback__buttons-list">
            <li className="feedback__buttons-item">
                <button className="feedback__buttons-button" onClick={options.onGood}>
                    Good
                </button>
            </li>
            <li className="feedback__buttons-item">
                <button className="feedback__buttons-button" onClick={options.onNeutral}>
                    Neutral
                </button>
            </li>
            <li className="feedback__buttons-item">
                <button className="feedback__buttons-button" onClick={options.onBad}>
                    Bad
                </button>
            </li>
        </ul>
    );
};

export default FeedbackOptions;
