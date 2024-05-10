import { NavLink } from 'react-router-dom';
import ABLogo from '../../Assets/Img/argentBankLogo.webp';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HeaderConnect from "../HeaderConnect/HeaderConnect";
import { useSelector } from 'react-redux';

function Header() {

    const loggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
        <nav className='navigation'>
            <NavLink className="navigation__logo" to={"/"}>
                <img  className="navigation__logo--image" src={ABLogo} alt="ArgentBank Logo" />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
        {loggedIn ? <HeaderConnect/> :
        <div>
            <NavLink to="/SignIn" className="navigation__item">
            <FontAwesomeIcon icon={faCircleUser}/>
                Sign In
            </NavLink>
        </div> }
        </nav>
    )
}

export default Header