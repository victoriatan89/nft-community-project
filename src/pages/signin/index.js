import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";

const Signin = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const {signin} = useProfile();
    const handleSignin = async () => {
        try {
            await signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile");
        } catch (e) {
            alert("Email does not exist. Please sign up first!")
        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 fw-bold">Sign In</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input ref={emailRef} id="email" placeholder="alice@wonderland.com" className="form-control" type="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input ref={passwordRef} id="password" className="form-control" type="password"/>
            </div>
            <button className="btn btn-primary float-end" onClick={handleSignin}>Sign in</button>
        </div>
    );
};

export default Signin;