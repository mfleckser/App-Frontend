import React from 'react'
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className={"nav"}>
            <Link to="/" id="home-btn">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
}
