import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import useAuth from './../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();


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
    return (
        <>

            <div className=" container mx-auto px-5 py-8 flex items-center  justify-center flex-col ">
                {!isLoading && <form className='container mt-5 object-center w-1/3  text-left' onSubmit={handleLoginSubmit}>
                    <h3 className="text-green-700 font-bold text-xl">  Register to your account</h3>

                    <div className="row mb-3">
                        <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} name="name" type="text" className="border-1 border-green-300 w-full rounded" id="inputName3" required placeholder="type your full name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} name="email" type="email" className="border-1 border-green-300 w-full rounded" id="inputEmail3" required placeholder="type your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="password" name="password" className="border-1 border-green-300 w-full rounded" id="inputPassword3" required placeholder="type your password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handleOnChange} type="password" name="password2" className="border-1 border-green-300 w-full rounded" id="inputPassword3" required placeholder="retype your password" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <NavLink
                                    style={{ textDecoration: "none" }}
                                    to="/login">
                                    <button
                                        variant="text">Already Registered? Please Login</button>

                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="bg-green-200 my-2 px-4 py-2">Register</button>
                    <br />


                    {/* <button onClick={handleResetPassword} type="button" className=" text-blue-400 my-2">Forgot your password?</button> */}

                </form>}
                {isLoading && <Spinner></Spinner>}
                {user?.email && <alert severity="success">Logged In successfully</alert>
                }
                {authError && <alert severity="error">{authError}</alert>
                }



            </div>
        </>
    );
};

export default Register;