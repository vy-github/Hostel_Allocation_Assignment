import { facebookProvider, googleProvider } from "../config/authMethod";
import socialMediaAuth from "../services/auth";
import Booked from "./booked";
import MenuBar from "./menubar";
import React from 'react'
import './login.css';

function Login() {

   const [renderMenubar, setRenderMenubar] = React.useState(false);

   const handelOnclick = async(provider) => {
      const res = await socialMediaAuth(provider);
      if (localStorage.getItem(res.email)) {
         setRenderMenubar(true)
      } else {
         const value = JSON.stringify({
            title : res.displayName
         })
         localStorage.setItem(res.email, value);
      }
   }

   return (
      renderMenubar ? (<MenuBar />) :
      (<div className="container">
         <div className="login-heading">
            <h1>Hostel Allocation</h1>
         </div>
         <div className="container-body">
            <p>Please sign-in:</p>
            <div className="sign-in-option">
               <i class="fa fa-google"></i><button onClick={() => handelOnclick(googleProvider)}>Sign in with Google</button>
            </div>
            <div className="sign-in-option">
               <i class="fa fa-facebook"></i><button onClick={() => handelOnclick(facebookProvider)}>Sign in with Facebook</button>
            </div>
         </div>
      </div>)
   )
}

export default Login;