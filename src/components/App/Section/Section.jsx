const Section = ({ title, children }) => {
    return (
        <>
            <h1 className="feedback__title">{title}</h1>
            {children}
        </>
    );
};

export default Section;
