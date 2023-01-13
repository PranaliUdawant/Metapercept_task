import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import "./NavbarStyle.css"
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid  Navbar">
                <a className="navbar-brand" href="#">title</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" to="/">Home</a>
                        <a className="nav-link" to="/about">About</a>
                        <a className="nav-link" to="/blog">Blog</a>
                        <a className="nav-link" to="/contact">Contact</a>
                        <button className='btn btn-primary'>Button</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
