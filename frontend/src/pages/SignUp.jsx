import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return ( 
        <div id="sign-up-container">

        
            <h1 id="sign-up-title">Welcome! Let's create your account!</h1>
            <form>
                <input class="sign-up-input" type="text" placeholder="Your name"/>
                <input class="sign-up-input" type="text" placeholder="University email"/>
                <input class="sign-up-input" type="text" placeholder="Phone number"/>
                <input class="sign-up-input" type="password" placeholder="Password"/>
                <input class="sign-up-input" type="password" placeholder="Reenter password"/>
                <div id="sign-up-btn-wrapper">
                    <button id="sign-up-continue-btn">Continue</button>
                    <Link to="/signin"><button id="sign-up-done-btn">I already have an account</button></Link>
                </div>
            </form>
        </div>
     );
}

export default SignUp;