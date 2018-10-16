import React from 'react'

const Campus = (props) => {
    return (
    <div>
        <h3>{props.campus.name}</h3>
        <p>{props.campus.imageUrl}</p>
        <p>{props.campus.description}</p>
    </div>)
}

export default Campus
