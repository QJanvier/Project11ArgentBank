import PropTypes from 'prop-types';

function Input (props) {
    const { className, htmlFor, type, id, text, value, onChange, disabled, onSubmit, autocomplete } = props;
   
    return (
        <div className={className}>
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type} 
                id={id} 
                value={value} 
                onChange={onChange} 
                disabled={disabled} 
                onSubmit={onSubmit} 
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
    value: PropTypes.string.isRequired,   //needs fix  value undefined
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string.isRequired,  //needs fix
    onSubmit: PropTypes.string.isRequired,  //needs fix
    autocomplete: PropTypes.any.isRequired,
}

export default Input