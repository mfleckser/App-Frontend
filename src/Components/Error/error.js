import React from 'react'

export const Error = ({ message, onBtnClick }) => {
    return (
        <div className={"error-message"}>
            {message}
            <button className={"error-btn"} onClick={onBtnClick}>X</button>
        </div>
    )
}
