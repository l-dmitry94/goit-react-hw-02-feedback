import PropTypes from 'prop-types';
import { Button, ButtonsItem, ButtonsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options }) => {
    return (
        <ButtonsList>
            <ButtonsItem>
                <Button onClick={options.onGood}>Good</Button>
            </ButtonsItem>
            <ButtonsItem>
                <Button onClick={options.onNeutral}>Neutral</Button>
            </ButtonsItem>
            <ButtonsItem>
                <Button onClick={options.onBad}>Bad</Button>
            </ButtonsItem>
        </ButtonsList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        onGood: PropTypes.func.isRequired,
        onNeutral: PropTypes.func.isRequired,
        onBad: PropTypes.func.isRequired,
    }),
};

export default FeedbackOptions;
