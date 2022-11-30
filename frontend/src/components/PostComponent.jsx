import React from 'react';

function PostComponent(props) {
    return (
        <div id="post-comp-container">
            <h1 id="post-comp-mode-txt" class="left">{props.travel}</h1>
            <h1 id ="post-comp-locations-txt" class="left">{props.startLocation} to {props.endLocation}</h1>
            <h1 id="post-comp-date-txt" class="left">{props.day}, {props.month} {props.date}, {props.time}</h1>
            <h2 id="post-comp-desc-txt" class="left">{props.desc}</h2>
            <h1 id="post-comp-name-txt" class="left">Posted by <strong id="post-comp-username">{props.name}</strong></h1>
        </div>
      );
}

export default PostComponent;