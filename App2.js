import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const heading = <h1 // heading is react element
id="title" key="h1">
    Namaste React!!</h1> // JSX expression

//React component
const HeaderComponent = () =>{
    return(
        <div>
            {heading}
            <h1>Namaste React Functional component</h1>
            <h2>It is a h2 tag</h2>
        </div>
    );
};

const Title = () =>{
    return(
        <h1 id ="title" key="h1">
            Namaste React
        </h1>
    );
};
const HeaderComponent1 = () =>{
    (
        // including a functional component inside another functional component
        <div>
            <Title/>
            <h1>React Functional component</h1>
        </div>   
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); --> rendering react element
root.render(<HeaderComponent/>); // --> rendering react components