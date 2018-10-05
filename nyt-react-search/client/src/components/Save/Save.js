import React from "react";

const Save = props => {
    const date = props.date && props.date.slice(0, 10);
    return (
        <div className="results">
            <a href={props.url} target="_blank"><h6 id={props._id}>{props.title}</h6></a>
            <h6 id={props._id}>{props.author}</h6>
            <p>{date}</p>
            <span className="#">
                <button className="deleteBtn waves-effect" onClick={(event) => props.handleDeleteButton(event, props._id)}>Delete</button>
            </span>
        </div>
    )
};

export default Save;
