import React from 'react'

export const Spinner = (props) => {
    return (
        <div className = "ui active dimmer">
            <div className = "ui big text loader">{props.message}</div>
        </div>
    )
}
// Its a Good Practice to use default props
Spinner.defaultProps = {
    message: "Loading..."
}
