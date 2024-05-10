import PropTypes from "prop-types";

function Button (props) {
    const { classname, text, onSubmit, type, onClick } = props

    return (
        <button type={type} className={classname} onSubmit={onSubmit} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    classname: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    type: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button