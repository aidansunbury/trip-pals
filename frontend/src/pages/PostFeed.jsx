import React from "react";
import PostComponent from "../components/PostComponent";
import { Link } from "react-router-dom";

function PostFeed() {
  const newPost = {
    travel: "Flight",
    desc: "Hey! I’m a wuggle heading to Mogsmeade for Thanksgiving. Hmu if you’re taking the same flight or going to the airport around then. I haven’t gone back since college started and would love a buddy to travel with :)",
    startLocation: "New York",
    endLocation: "Pennsylvania",
    day: "Sunday",
    month: "November",
    date: "21",
    time: "6:30 PM",
    name: "Bob",
  };
  return (
    <div id="feed-container">
      <Link class="feed-post-btn" to="/createpost">
        <button class="center feed-post-btn">POST A TRIP</button>
      </Link>
      <PostComponent
        travel={newPost.travel}
        desc={newPost.desc}
        startLocation={newPost.startLocation}
        endLocation={newPost.endLocation}
        day={newPost.day}
        month={newPost.month}
        date={newPost.date}
        time={newPost.time}
        name={newPost.name}
      />
    </div>
  );
}

export default PostFeed;
