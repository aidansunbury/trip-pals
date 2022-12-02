import React from "react";
import PostComponent from "../components/PostComponent";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { getAllPosts } from "../functions";
import { async } from "@firebase/util";


function PostFeed() {
  const [val, setVal] = useState([
    {
      message: "",
      to: "",
      from: "",
      day: "",
      time: "",
    },
  ]);

  async function get() {
    let data = getAllPosts();
    await data.then((value) => {
      setVal(value);
      console.log(val);
    });
  }

  // function Posts() {
  //   if (val[0] != "none") {
  //     return (
  //       <>
  //         {val.map(({ day, from, message, time, to }) => (
  //           <p>hi</p>
  //         ))}
  //       </>
  //     );
  //   } else {
  //     return <p>failed</p>;
  //   }
  // }

  // useEffect(async () => {
  //   //console.log(data);
  //   get();

  //   //console.log(val);
  //   // await data.then((value) => {
  //   //   setVal(value);
  //   //   console.log(val);
  //   // });
  //   // console.log(val);
  //   //console.log();
  // }, []);
  const newPost = {
    travel: "Flight",
    desc: "Hey! I'm a wuggle heading to Mogsmeade for Thanksgiving. Hmu if you’re taking the same flight or going to the airport around then. I haven’t gone back since college started and would love a buddy to travel with :)",
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

      {val.map(({ message, to, from, day, time, by }) => (
        // <p>hi {typeof message !== "undefined" ? { message } : "none"}</p>
        <PostComponent
          travel={"Car"}
          desc={message}
          startLocation={from}
          endLocation={to}
          day={newPost.day}
          month={newPost.month}
          date={day}
          time={time}
          name={by}
        />
      ))}
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

      <button
        onClick={async () => {
          get();
        }}
      ></button>
    </div>
  );
}

export default PostFeed;
