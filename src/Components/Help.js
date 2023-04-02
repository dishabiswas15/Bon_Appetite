import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-white drop-shadow-md border border-gray-300 p-2 m-2">
      <h3 className="font-bold text-l">{title}</h3>
      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(false)}
            className="cursor-pointer underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <Section
        title={"Can I edit my order?"}
        description={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
        isVisible={visibleSection == "edit"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("edit") : setVisibleSection("");
        }}
      />
      <Section
        title={"I want to cancel my order"}
        description={
          "We will do our best to accommodate your request if the order is not placed to the restaurant"
        }
        isVisible={visibleSection == "cancel"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("cancel") : setVisibleSection("");
        }}
      />
      <Section
        title={"Do you charge for delivery?"}
        description={
          "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page."
        }
        isVisible={visibleSection == "charge"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("charge") : setVisibleSection("");
        }}
      />
      <Section
        title={"How long do you take to delivery?"}
        description={
          "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant."
        }
        isVisible={visibleSection == "delivery time"}
        setIsVisible={(isVisible) => {
          isVisible
            ? setVisibleSection("delivery time")
            : setVisibleSection("");
        }}
      />
      <Section
        title={"What are your delivery hours?"}
        description={
          "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners."
        }
        isVisible={visibleSection == "delivery hours"}
        setIsVisible={(isVisible) => {
          isVisible
            ? setVisibleSection("delivery hours")
            : setVisibleSection("");
        }}
      />
      <Section
        title={"Do you charge for delivery?"}
        description={
          "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page."
        }
        isVisible={visibleSection == "delivery charge"}
        setIsVisible={(isVisible) => {
          isVisible
            ? setVisibleSection("delivery charge")
            : setVisibleSection("");
        }}
      />

      {/* <AboutInstamart/>
            <DetailsOfInstamart/>
            <Produc/>
            <Career/> */}
    </div>
  );
};

export default Help;
