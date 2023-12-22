import PropTypes from 'prop-types';
import { FeedbackTitle } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
        </>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;
