import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Spinner from '../Spinner/Spinner';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();


    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        // alert('Submitted');
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <>
            <Navigation></Navigation>

            <div className=" container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                {!isLoading && <form className='container mt-5 object-center w-1/3  text-left' onSubmit={handleLoginSubmit}>
                    <h3 className="text-blue-400 underline font-bold text-xl mb-2">  Register to your account</h3>

                    <div className="row mb-3">
                        <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} name="name" type="text" className="border-2 border-blue-300 w-full rounded p-2" id="inputName3" required placeholder="type your full name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} name="email" type="email" className="border-2 border-blue-300 w-full rounded p-2" id="inputEmail3" required placeholder="type your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="password" name="password" className="border-2 border-blue-300 w-full rounded p-2" id="inputPassword3" required placeholder="type your password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="password" name="password2" className="border-2  border-blue-300 w-full rounded p-2" id="inputPassword3" required placeholder="retype your password" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/login">
                                    <button
                                        className="font-bold text-blue-500"
                                        variant="text">Already Registered? Please Login</button>

                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-green-200 my-2 px-4 py-2">Register</button>
                    <br />


                    {/* <button onClick={handleResetPassword} type="button" className=" text-blue-400 my-2">Forgot your password?</button> */}

                    {isLoading && <Spinner></Spinner>}
                    {user?.email && <alert severity="success">Logged In successfully</alert>
                    }
                    {authError && <alert severity="error">{authError}</alert>
                    }
                </form>}


                <div>Or</div>
                <div>
                    <button onClick={handleGoogleSignIn} className="bg-yellow-300 px-3 py-2 my-2 rounded">Google Sign In</button>

                </div>

            </div>
            <Footer></Footer>

        </>
    );
};

export default Register;