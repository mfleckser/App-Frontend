import React from 'react'
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <Link to="/login">Log In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}
