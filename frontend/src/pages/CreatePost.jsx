import React from "react";
import { useState } from "react";
import { createPost } from "../functions";
import { UserAuth } from "../context/AuthContext";

function CreatePost() {
  const { googleSignIn, user } = UserAuth();
  const [contactInfo, setContactInfo] = useState({
    from: "",
    to: "",
    day: "",
    time: "",
    message: "",
    by: user?.displayName,
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    //console.log(contactInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(contactInfo);
    createPost(user, contactInfo);
    setContactInfo({
      from: "",
      to: "",
      day: "",
      time: "",
      message: "",
      by: user?.displayName,
    });
  };

  return (
    <div id="create-post-background">
      <form>
        <label class="create-post-label center" id="create-post-header">
          Create a Post!
        </label>
        <div id="create-post-location-background">
          <div class="create-post-location-container center">
            <label>I'm traveling from </label>
            <input
              type="text"
              name="from"
              class="create-post-text-input"
              value={contactInfo.from}
              onChange={handleChange}
            />
          </div>
          <div class="create-post-location-container center">
            <label>and going to </label>
            <input
              type="text"
              name="to"
              class="create-post-text-input"
              value={contactInfo.to}
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="left create-post-mode-label">
          <label class="create-post-label left">I'm traveling by</label>
          <div class="create-post-radio">
            <input
              type="radio"
              value="Plane"
              name="traveloption"
              id="radio-plane"
              class="create-post-radio-btn"
            />
            <label class="radio-labels" for="radio-plane">
              Plane
            </label>
            <br />
          </div>
          <div class="create-post-radio">
            <input
              type="radio"
              value="Carpool"
              name="traveloption"
              id="radio-carpool"
              class="create-post-radio-btn"
            />
            <label class="radio-labels" for="radio-carpool">
              Carpool
            </label>
            <br />
          </div>
          <div class="create-post-radio">
            <input
              type="radio"
              value="Train"
              name="traveloption"
              id="radio-train"
              class="create-post-radio-btn"
            />
            <label class="radio-labels" for="radio-train">
              Train
            </label>
            <br />
          </div>
        </div>

        <div id="date-time-container" class="left">
          <label class="create-post-mode-label" id="create-post-date">
            I'm leaving on{" "}
          </label>
          <input
            type="text"
            class="create-post-text-input"
            id="date-input"
            placeholder="January 1"
            name="day"
            value={contactInfo.day}
            onChange={handleChange}
          />
          <label id="create-post-time"> at </label>
          <input
            type="text"
            class="create-post-text-input"
            id="time-input"
            placeholder="6:30"
            name="time"
            value={contactInfo.time}
            onChange={handleChange}
          />
        </div>

        <label class="create-post-label left create-post-mode-label">
          Message
        </label>

        <textarea
          type="text"
          placeholder="Write a note..."
          rows="5"
          class="left create-post-mode-label create-post-label"
          id="create-post-description"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        >
          {" "}
        </textarea>
        <button
          type="submit"
          class="center"
          id="create-post-btn"
          onClick={handleSubmit}
        >
          Post Trip
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
