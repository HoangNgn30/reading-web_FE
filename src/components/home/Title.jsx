const Title = ({ title1, title2, para, titleStyles, title1Styles, paraStyles }) => {
    return (
        <div className={`${titleStyles} pb-1`}>
            <h2 className={`${title1Styles} h2 text-4xl`}>
                {title1}
                <span className="text-secondary !font-light">{title2}</span>
            </h2>
            <p className={`${paraStyles} hidden`}>{para}</p>
        </div>
    );
};

export default Title;
