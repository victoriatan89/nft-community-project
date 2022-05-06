import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const handleExplore = () => {
        navigate('/explore');
    }
    return (
        <div className="container col-xxl-8 px-4 py-5 semitransparent-background">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <Link className="card" style={{ color: 'inherit', textDecoration: 'inherit'}}
                          to="/details/beanzofficial/0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949">
                        <img src="/images/beanz.png" className="d-block mx-lg-auto img-fluid card-img-top"
                             alt="image cap" width="700" height="500" loading="lazy"/>
                        <div className="card-body d-flex">
                            <img src="https://lh3.googleusercontent.com/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On=s120"
                                 alt="logo" width="50px" height="50px" className="rounded-circle me-3"/>
                            <div className="fw-bold text-white">
                                <div>BEANZ Official</div>
                                <div>by Azuki</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Discover and discuss extraordinary NFTs</h1>
                    <p className="lead">The NFT space is a community. People invest time in it, sharing ideas,
                        collaborating, talking, supporting and buying into each other’s art and projects. If you are an
                        NFT enthusiast like we are, join our best NFT communities or build your own community today!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"
                                onClick={handleExplore}>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;