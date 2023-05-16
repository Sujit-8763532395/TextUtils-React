import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    //<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
        <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link> 
            </li>
            <li className="nav-item">
                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                <Link className="nav-link" to="/about">{props.aboutText}</Link> 
            </li>
            </ul>
            <div className="mx-3"> 
                <input type="color" id="colorpicker" onChange={props.handleColor}></input> 
            </div> 
            {/* <div className="form-check form-switch text-dark"> */}
            {/* <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>   */}
            <div className={`form-check form-switch text-${props.toggleTextColour}`}>  
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleText}</label> 
            </div>
        </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title',
    aboutText: 'About'
};
