import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = ()=>{

    return (
       
       <div className="flex">
        <div className="bg-white drop-shadow-md w-96 p-2"> 
        <p className="text-2xl italic text-yellow-400 font-bold">About Me</p>
        <hr className="w-40 p-1 mb-4 h-px  bg-gray-200 border-0 rounded dark:bg-yellow-500"/>
        <p>I am Disha Biswas, Font-end developer, currently I am learning React</p>
        </div>
       <div className="bg-white drop-shadow-md p-2">
        <p className="text-2xl italic text-yellow-400 font-bold">About Us</p>
        <hr className="w-40 p-1 mb-4 h-px  bg-gray-200 border-0 rounded dark:bg-yellow-500"/>
        <div className="flex">
            <div className="mb-16">
            <p className="text-xl italic text-gray-400 font-bold underline py-2">Our Mission</p>

                <div className="text-base italic text-gray-800 text-bold pl-2">Welcome to our bon appétit, where we strive to make your dining experience as seamless and enjoyable as possible. Our app is built using the powerful React framework and designed using the versatile Tailwind CSS library, ensuring a smooth and visually appealing experience for our users.</div>

                <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">Our Team</h2>
                <p className="text-base italic text-gray-800 text-bold pl-2">Our team is composed of passionate food enthusiasts, developers, and designers who all share the same goal: to provide you with an easy and hassle-free way to order your favorite meals online. We believe that food is not just a necessity, but a way to connect people and cultures. That's why we've worked tirelessly to create an app that reflects our values of inclusivity, diversity, and innovation.</p>
                <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">Our Focus</h2>
                <p className="text-base italic text-gray-800 text-bold pl-2">At our core, we are a customer-centric company. We take your feedback seriously and use it to continuously improve our app. Whether you're looking for a quick and easy meal during a busy day or a special occasion feast, we've got you covered. Our app features a wide variety of cuisines and restaurants to choose from, ensuring that there's something for everyone.</p>
                <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">Our Features</h2>
                <p className="text-base italic text-gray-800 text-bold pl-2">With our user-friendly interface and intuitive navigation, you can easily browse menus, filter by dietary preferences, and place your order in just a few clicks. Plus, our real-time order tracking feature allows you to keep tabs on your delivery status, so you can plan your day accordingly.</p>
                <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">Contact Us</h2>

                <p className="text-base italic text-gray-800 text-bold pl-2">We're always looking for ways to improve and enhance our app, so if you have any suggestions or feedback, please don't hesitate to get in touch. Thank you for choosing our food ordering app, and we hope you enjoy your meal!</p>

            </div>
            
        </div>
       </div>
       </div>
       

    )

}  // children always render inside the outlet. as we have created a child inside the "about" named "profile"
//   to make it work we have created an outlet inside the "about"

export default About;