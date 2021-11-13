import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        // alert('Submitted');
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <Navigation></Navigation>
            <div className=" container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                <form className='container mt-5 object-center w-1/3  text-left' onSubmit={handleLoginSubmit}>
                    <h3 className="text-green-700 font-bold text-xl">  Sign in to your account</h3>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="email" className="border-1 border-green-300 w-full rounded" id="inputEmail3" required placeholder="type your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="password" className="border-1 border-green-300 w-full rounded" id="inputPassword3" required placeholder="type your password" />
                        </div>
                    </div>


                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/register">
                                    <button
                                        variant="text">New User? Please Register</button>

                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-green-200 my-2 px-4 py-2">Sign in</button>
                    <br />
                    {isLoading && <Spinner></Spinner>}
                    {user?.email && <p severity="success">Logged In successfully</p>
                    }
                    {authError && <p severity="error">{authError}</p>
                    }

                    {/* <button onClick={handleResetPassword} type="button" className=" text-blue-400 my-2">Forgot your password?</button> */}

                </form>
                <div>Or</div>
                <div>
                    <button onClick={handleGoogleSignIn} className="bg-yellow-300 px-3 py-2 my-2">Google Sign In</button>

                </div>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Login;