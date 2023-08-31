import React from 'react'
import illustration from "../images/illustration.png"
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="container col-xxl-8 py-5 mt-5">
            <div className="row flex-lg-row-reverse align-items-center mt-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={illustration} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Create, Read, Update and Delete.</h1>
                    <p className="lead">Welcome to our PortFolioManager App. Capable of performing all crud opperations to store, retrive, update and delete portfolios. Our App is made with Cutting Edge technologies which include React JS, Spring Boot, MySQL, BootStrap and Axios.</p>
                    {/* <div>
                        <Link className="btn btn-outline-primary" to="/register">Register</Link>
                        <Link className="btn btn-outline-success mx-3" to="/login">Login</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Welcome