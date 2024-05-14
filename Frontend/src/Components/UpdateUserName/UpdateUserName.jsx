import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../Features/editUserSlice';
import PropTypes from "prop-types";
import Button from '../Button/Button';
import Input from '../Input/Input';

function EditUserName ({ toggleEditing }) {
    const { firstName, lastName, userName } = useSelector(state => state.profile);
    const [newUserName, setNewUserName] = useState(userName);
    const dispatch = useDispatch();

    const handleSave = () => {
        toggleEditing();
        dispatch(updateUserName(newUserName));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <form onSubmit={handleSubmit}>

                <Input className='input-wrapper input-wrapper--edit' htmlFor='UserName' text="User Name: " type="text" id="UserName" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} autocomplete="off" />
            <div className='edit-field'>
                <Input className='input-wrapper input-wrapper--edit' htmlFor='firstname' text='First Name: ' type="text" id="firstname" disabled value={firstName} />
                <Input className='input-wrapper input-wrapper--edit' htmlFor='LastName' text='Last Name: ' type="text" id="LastName" disabled value={lastName}/>
            </div>
                <Button classname='edit__button' text='Cancel' onClick={toggleEditing} />
        </form>
    );
}

EditUserName.propTypes = {
    toggleEditing: PropTypes.func.isRequired
}

export default EditUserName