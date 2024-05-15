import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { logOut} from '../../Features/authSlice';
import { useNavigate } from "react-router-dom";

function HeaderConnect() {
    const { userName } = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const disconnect = (e) => {
        e.preventDefault();
        dispatch(logOut(navigate("/")));
        sessionStorage.removeItem("token");
    }

    return (
        <>
            <div>
                <NavLink to="/User" className="navigation__item">
                    <FontAwesomeIcon icon={faCircleUser} />{userName}
                </NavLink>

                <NavLink className="navigation__item" onClick={disconnect}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </NavLink>
            </div>
        </>
    );
}

export default HeaderConnect;