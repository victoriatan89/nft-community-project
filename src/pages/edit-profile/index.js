import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import "./index.css"

const EditProfile = () => {
    const navigate = useNavigate();
    const {profile, editProfile} = useProfile();
    const [name, setName] = useState(profile.name);
    const [handle, setHandle] = useState(profile.handle);
    const [role, setRole] = useState(profile.role);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(new Date(profile.dob).toLocaleString("fr-CA").split(",")[0]);
    const handleChange = (event) => {
        setRole(event.target.value);
    }
    const handleSave = async () => {
        let bday = new Date(dob);
        bday = new Date(bday.getUTCFullYear(), bday.getUTCMonth(), bday.getUTCDate());
        const newProfile = {
            ...profile,
            name: name,
            handle: handle,
            role: role,
            bio: bio,
            location: location,
            website: website,
            dob: bday
        }
        try {
            await editProfile(profile._id, newProfile);
            navigate('/profile');
        } catch (e) {
            alert("Failed to edit profile.")
        }
    }
    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between pb-3">
                <div className="d-flex align-items-center gap-4">
                    <Link to="/profile"><i className="fa-solid fa-xmark ps-2" style={{"color": "white"}}/></Link>
                    <h5 className="mb-0 fw-bold">Edit profile</h5>
                </div>
                <Link to="/profile" className="btn btn-primary" onClick={handleSave}>Save</Link>
            </div>
            {
                profile && profile.banner &&
                <img src={profile.banner} width="100%" alt="banner"/>
            }
            <div className="overlap">
                {
                    profile && profile.avatar &&
                    <img src={profile.avatar} width="150px" height="150px" alt="avatar"
                         className="rounded-circle border border-5 border-light"/>
                }
                <div className="mt-4 me-5">
                    <form className="form-floating mb-3">
                        <input type="text" className="form-control bg-black text-white" id="name" value={name}
                               onChange={(event) => {setName(event.target.value)}}/>
                        <label htmlFor="name">Your name</label>
                    </form>
                    <form className="form-floating mb-3">
                        <input type="text" className="form-control bg-black text-white" id="handle" value={handle}
                               onChange={(event) => {setHandle(event.target.value)}}/>
                        <label htmlFor="handle">Username (Public handle)</label>
                    </form>
                    <form className="form-floating mb-3">
                        <textarea className="form-control bg-black text-white"
                                  style={{"height": "auto"}} id="userBio" value={bio}
                                  onChange={(event) => {setBio(event.target.value)}}/>
                        <label htmlFor="userBio">Bio</label>
                    </form>
                    <form className="form-floating mb-3">
                        <input type="text" className="form-control bg-black text-white"
                               id="userLocation" value={location}
                               onChange={(event) => {setLocation(event.target.value)}}/>
                        <label htmlFor="userLocation">Location</label>
                    </form>
                    <form className="form-floating mb-3">
                        <input type="url" className="form-control bg-black text-white"
                               id="userWebsite" value={website}
                               onChange={(event) => {setWebsite(event.target.value)}}/>
                        <label htmlFor="userWebsite">Website</label>
                    </form>
                    <form className="form-floating">
                        <input type="date" className="form-control bg-black text-white"
                               id="userDob" value={dob}
                               onChange={(event) => {setDob(event.target.value);}}/>
                        <label htmlFor="userDob">Date of Birth</label>
                    </form>
                    <div className="mt-3 border border-secondary rounded">
                        <div className="ps-3 pt-1 opacity-75">
                            <small>Please select a role</small>
                        </div>
                        <div className="ps-3 pb-2">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;