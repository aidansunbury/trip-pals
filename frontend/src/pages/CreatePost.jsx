import React from 'react';

function CreatePost() {
    return ( 
        <div id="create-post-background">
            <form >
                <label class="create-post-label" id="create-post-header">Create a Post!</label>
                <div id="create-post-location-background">
                    <div class="create-post-location-container">
                        <label>I'm traveling from </label>
                        <input type="text" class="create-post-text-input"/>
                    </div>
                    <div class="create-post-location-container">
                        <label>and going to </label>
                        <input type="text" class="create-post-text-input"/>
                    </div>
                </div>
                
                <div class="left create-post-mode-label">
                    <label class="create-post-label left">I'm traveling by</label>
                    <div class="create-post-radio">
                        <input type="radio" value="Plane" name="traveloption" id="radio-plane" class="create-post-radio-btn"/>
                        <label for="radio-plane"> Plane</label><br/>
                    </div>
                    <div class="create-post-radio">
                        <input type="radio" value="Carpool" name="traveloption" id="radio-carpool" class="create-post-radio-btn"/>
                        <label for="radio-carpool"> Carpool</label><br/>
                    </div>
                    <div class="create-post-radio">
                        <input type="radio" value="Train" name="traveloption" id="radio-train" class="create-post-radio-btn"/>
                        <label for="radio-train"> Train</label><br/>
                    </div>
                </div>
                
                <div id="date-time-container" class="left">
                    <label class="create-post-mode-label" id="create-post-date">I'm leaving on </label>
                    <input type="text" class="create-post-text-input" id="date-input" placeholder="January 1"/>
                    <label id="create-post-time"> at </label>
                    <input type="text" class="create-post-text-input" id="time-input" placeholder="6:30"/>
                </div>
                
                <label class="create-post-label left create-post-mode-label">Message</label>

                <textarea type="text" placeholder="Write a note..." rows="5" class="left create-post-mode-label create-post-label" id="create-post-description"> </textarea>
                <button id="create-post-btn">Post Trip</button>
            </form>
            
        </div>
     );
}

export default CreatePost;