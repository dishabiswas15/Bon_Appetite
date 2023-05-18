// import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
// import ProfileFunctionalComponent from "./Profile";
import { useEffect } from "react";

const About = () => {
  return (
    <div className="flex justify-around">
      <div className="bg-white drop-shadow-md w-[30%] p-2">
        <p className="text-2xl italic text-yellow-400 font-bold">About Me</p>
        <hr className="w-40 p-1 mb-4 h-px  bg-gray-200 border-0 rounded dark:bg-yellow-500" />
        <div className="justify-center items-center gap-5">
          <div className="p-10 px-16">
            <img
              className="rounded-full w-[200px] h-[200px] border-none"
              src="https://avatars.githubusercontent.com/u/89657952?v=4"
            ></img>
          </div>
        </div>

        <p>
          I am a 3rd year BTech undergraduate student focused on frontend web
          development. Currently I am learning React
        </p>
        <div className="mt-5 flex mx-32">
          <a href="https://github.com/dishabiswas15">
            <i className="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                className=""
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </i>
          </a>
          <a href="https://www.linkedin.com/in/disha-biswas-2907081b9/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mx-4"
              width="2em"
              height="2em"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            
          </a>
        </div>
      </div>
      <div className="bg-white drop-shadow-md w-[70%] px-5">
        <p className="text-2xl italic text-yellow-400 font-bold">About Us</p>
        <hr className="w-40 p-1 mb-4 h-px  bg-gray-200 border-0 rounded dark:bg-yellow-500" />
        <div className="flex">
          <div className="mb-16">
            <p className="text-xl italic text-gray-400 font-bold underline py-2">
              Our Mission
            </p>

            <div className="text-base italic text-gray-800 text-bold pl-2">
              Welcome to our bon appétit, where we strive to make your dining
              experience as seamless and enjoyable as possible. Our app is built
              using the powerful React framework and designed using the
              versatile Tailwind CSS library, ensuring a smooth and visually
              appealing experience for our users.
            </div>

            <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">
              Our Team
            </h2>
            <p className="text-base italic text-gray-800 text-bold pl-2">
              Our team is composed of passionate food enthusiasts, developers,
              and designers who all share the same goal: to provide you with an
              easy and hassle-free way to order your favorite meals online. We
              believe that food is not just a necessity, but a way to connect
              people and cultures. That's why we've worked tirelessly to create
              an app that reflects our values of inclusivity, diversity, and
              innovation.
            </p>
            <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">
              Our Focus
            </h2>
            <p className="text-base italic text-gray-800 text-bold pl-2">
              At our core, we are a customer-centric company. We take your
              feedback seriously and use it to continuously improve our app.
              Whether you're looking for a quick and easy meal during a busy day
              or a special occasion feast, we've got you covered. Our app
              features a wide variety of cuisines and restaurants to choose
              from, ensuring that there's something for everyone.
            </p>
            <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">
              Our Features
            </h2>
            <p className="text-base italic text-gray-800 text-bold pl-2">
              With our user-friendly interface and intuitive navigation, you can
              easily browse menus, filter by dietary preferences, and place your
              order in just a few clicks. Plus, our real-time order tracking
              feature allows you to keep tabs on your delivery status, so you
              can plan your day accordingly.
            </p>
            <h2 className="text-xl italic text-gray-400 font-bold underline py-2 ">
              Contact Us
            </h2>

            <p className="text-base italic text-gray-800 text-bold pl-2">
              We're always looking for ways to improve and enhance our app, so
              if you have any suggestions or feedback, please don't hesitate to
              get in touch. Thank you for choosing our food ordering app, and we
              hope you enjoy your meal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; // children always render inside the outlet. as we have created a child inside the "about" named "profile"
//   to make it work we have created an outlet inside the "about"

export default About;
