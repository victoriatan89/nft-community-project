import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";

const Signup = () => {
    const nameRef = useRef();
    const handleRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [role, setRole] = useState('beginner');
    const handleChange = (event) => {
        setRole(event.target.value);
    }
    const navigate = useNavigate();
    const {signup} = useProfile();
    const handleSignup = async () => {
        try {
            await signup(
                nameRef.current.value,
                handleRef.current.value,
                emailRef.current.value,
                passwordRef.current.value,
                role
            )
            navigate("/profile");
        } catch (e) {
            alert("Email exists. Please sign in!")
        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 fw-bold">Sign Up</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your name</label>
                <input ref={nameRef} id="name" placeholder="Alice Wonderland" className="form-control" type="text"/>
            </div>
            <div className="mb-3">
                <label htmlFor="handle" className="form-label">Username</label>
                <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input ref={handleRef} id="handle" placeholder="alice" className="form-control" type="text"/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input ref={emailRef} id="email" placeholder="alice@wonderland.com" className="form-control" type="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input ref={passwordRef} id="password" className="form-control" type="password"/>
            </div>
            <div className="mb-3">
                <div>Please select a role</div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                           value="creator" checked={role === 'creator'} onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Creator</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                           value="investor" checked={role === 'investor'} onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Investor</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                           value="beginner" checked={role === 'beginner'} onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="inlineRadio3">Beginner</label>
                </div>
            </div>
            <button className="btn btn-primary float-end" onClick={handleSignup}>Sign up</button>
        </div>
    );
};

export default Signup;