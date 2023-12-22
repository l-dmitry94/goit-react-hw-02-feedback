const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className="feedback__statistics-list">
            <li className="feedback__statistics-item">Good: {good}</li>
            <li className="feedback__statistics-item">Neutral: {neutral}</li>
            <li className="feedback__statistics-item">Bad: {bad}</li>
            <li className="feedback__statistics-item">Total: {total}</li>
            <li className="feedback__statistics-item">
                Positive feedback: {positivePercentage}%
            </li>
        </ul>
    );
};

export default Statistics;
