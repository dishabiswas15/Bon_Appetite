import { useState } from "react";
const Section = ({title, description, isVisible,  setIsVisible}) => {
    
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible? (
                <>
                <button onClick={() => setIsVisible(false)}
                className="cursor-pointer underline">
                    Hide
                </button>
                <p>{description}</p>
                </>
            ):(
                <button 
                onClick={()=> setIsVisible(true)}
                className="cursor-pointer underline">
                    Show
                </button>
            )}
           
        </div>
        
    );
};
const Instamart =() => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div>
            <Section 
            title={"About Instamart"}
            description={"This is the About page of Instamart"}
            isVisible={visibleSection=="about"} 
            setIsVisible ={(isVisible)=>  {isVisible ? (setVisibleSection ("about")) : (setVisibleSection(""))}}
            />
            <Section 
            title={"Team Instamart"}
            description={"This is the Team Section of Instamart"}
            isVisible={visibleSection=="team"}
            setIsVisible={(isVisible)=>  {isVisible ? (setVisibleSection ("team")) : (setVisibleSection(""))}}/>
            <Section 
            title={"Career Instamart"}
            description={"This is the Career details page of Instamart"}
            isVisible={visibleSection=="career"}
            setIsVisible={(isVisible)=>  {isVisible ? (setVisibleSection ("career")) : (setVisibleSection(""))}}/>
            
            
            {/* <AboutInstamart/>
            <DetailsOfInstamart/>
            <Produc/>
            <Career/> */}

            
        </div>
    );
};

export default Instamart;