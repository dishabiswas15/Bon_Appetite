/**
 * Advantages of Parcel:
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFING
 * CLEANING OUR CODE 
 * Dev and Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compress the files and rename my codes
 * Take care of Older version of browser
 * Manages PORT Number
 * Consistent Hashing Algorithm to cach things up
 * Zero Config
 * Tree Shaking - Removing unwanted
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", // heading1 is React element
{
    id:"title",
    key: "h1",
},
"Heading1"); // <h1 id: "title"> Heading1 </h1>

const heading2 = React.createElement("h2",
{
    id: "title",
    key: "h2",
},
// React.craeteElement gives us an object => HTML DOM
"Heading 2");


const container = React.createElement("div",
{
    id: "container",
},
[heading1, heading2]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
