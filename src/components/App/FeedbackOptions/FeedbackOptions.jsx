import PropTypes from 'prop-types';
import { Button, ButtonsItem, ButtonsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonsList>
            {options.map(feedback => (
                <ButtonsItem key={feedback}>
                    <Button onClick={onLeaveFeedback}>{feedback}</Button>
                </ButtonsItem>
            ))}
        </ButtonsList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
