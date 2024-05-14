import PropTypes from 'prop-types';

function Input (props) {
    const { className, htmlFor, type, id, text, value, onChange, disabled, autocomplete } = props;
   
    return (
        <div className={className}>
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type} 
                id={id} 
                value={value} 
                onChange={onChange} 
                disabled={disabled}                
                autoComplete={autocomplete}
            />
        </div>
    )
}

Input.propTypes = {
    className: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    type: PropTypes.any.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,  
    autocomplete: PropTypes.any,
}

export default Input