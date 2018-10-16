import React from 'react'


const Student = (props) => {
    return (
    <div>
        <h3>{props.student.name}</h3>
        <h3>{props.student.email}</h3>
        <p>{props.student.imageUrl}</p>
        <h3>{props.student.gpa}</h3>
        {/* <SingleCampus {
            // ? campus={props.campus} : null 
        } */}
            />
    </div>)
}

export default Student
