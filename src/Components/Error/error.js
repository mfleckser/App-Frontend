import React from 'react'

export const Error = ({ message }) => {
    return (
        <div className={"error-message"}>
            {message}
            <button className={"error-btn"}></button>
        </div>
    )
}
