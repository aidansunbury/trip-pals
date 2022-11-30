import React from 'react';

function PostComponent(props) {
    return (
        <div >
            <h1>{props.travel}</h1>
            <h1>`{props.startLocation} to {props.endLocation}`</h1>
            <h1>`{props.day}, {props.month} {props.day}, {props.time}`</h1>
            <h2>`{props.desc}</h2>
            <h2>`props.</h2>

        </div>
      );
}

export default PostComponent;