import { facebookProvider, googleProvider } from "../config/authMethod";
import socialMediaAuth from "../services/auth";

function Login() {

   const handelOnclick = async(provider) => {
      const res = await socialMediaAuth(provider);
      console.log(res);
   }

   return (
      <div className="container">
         <div className="login-heading">
            <h3>Hostel Allocation</h3>
         </div>
         <div className="body">
            <p>Please sign-in:</p>
            <div className="sign-in-options">
               <button onClick={() => handelOnclick(googleProvider)}>Google</button>
               <button onClick={() => handelOnclick(facebookProvider)}>Facebook</button>
            </div>
         </div>
      </div>
   )
}

export default Login;