import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button (props) {
    const { classname, text, onSubmit, type, onClick, icon } = props

    return (
        <button type={type} className={classname} onSubmit={onSubmit} onClick={onClick}>{text}  {icon && <FontAwesomeIcon icon={icon}></FontAwesomeIcon>}</button> 
    )
}

Button.propTypes = {
    classname: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func,
    icon: PropTypes.string,
    type: PropTypes.any,
    onClick: PropTypes.func,
};

export default Button