import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../Features/authSlice";
import Input from '../Input/Input';

function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state => state.auth.error);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        if (error) {
            setLoginError(error);
            const timeout = setTimeout(() => {
                setLoginError('');
            }, 1250);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await dispatch(fetchLogin({ email, password, rememberMe }));
        } catch (error) {
            console.log(error)
            sessionStorage.removeItem("token");
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/User');
        }
    }, [isLoggedIn, navigate]);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Input className="input-wrapper" htmlFor="email" type="email" id="email" text="Email" value={email} onChange={e => setEmail(e.target.value)} autocomplete="email" />
                    <Input className="input-wrapper" htmlFor="password" type="password" id="password" text="Password" value={password} onChange={e => setPassword(e.target.value)} autocomplete="off" />
                    <Input className="input-remember" htmlFor="rememberMe" type="checkbox" id="rememberMe" text="Remember me" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} autocomplete="off" />
                    <button className="sign-in-button">Sign In</button>
                    {loginError && <div className="error-message">{loginError}</div>}
                </form>
            </section>
        </main>
    );
}

export default Form