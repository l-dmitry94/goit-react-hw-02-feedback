import PropTypes from 'prop-types';
import { Subtitle, Title } from './Section.styled';

const Section = ({ title, tag, children }) => {
    const TitleTag = tag === "h1" ? Title : Subtitle;
    return (
        <>
            <TitleTag>{title}</TitleTag>
            {children}
        </>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2']),
    children: PropTypes.node.isRequired,
};

export default Section;