import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchUserProfile } from '../../Features/editUserSlice';
import EditUserName from '../UpdateUserName/UpdateUserName';
import Button from "../Button/Button";

function User() {
    const [isEditing, setIsEditing] = useState(false);
    const token = useSelector (state => state.auth.token);
    const { email, firstName, lastName} = useSelector ((state) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, [dispatch, token]);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="edit">
            {email && (
                <>
                    <h1>Welcome Back<br />{firstName} {lastName}!</h1>
                    {isEditing ? (
                        <EditUserName toggleEditing={toggleEditing} />
                    ) : (
                        <Button classname="edit__button" text="Edit" onClick={toggleEditing} />
                    )}
                </>
            )}
        </div>
    );
}

export default User