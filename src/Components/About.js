import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = ()=> {
    return(
        <div>
            <h1>This is About</h1>
            <p>Its Namaste React Live Course</p>
            <Profile name= {"AkshayClass"} /> 
            <ProfileFunctionalComponent name= {"Akshay"} />  
        </div>
        
    
    );
 };  // children always render inside the outlet. as we have created a child inside the "about" named "profile"
//   to make it work we have created an outlet inside the "about"

export default About;