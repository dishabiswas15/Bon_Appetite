import DeliveryItems from "./DeliveryItems";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const deliveryItems = [
  {
    id: 1,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 2,
    title: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 3,
    title: "Ice-Cream",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
  },
  {
    id: 4,
    title: "Fried rice",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
  {
    id: 5,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 6,
    title: "Thali",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 7,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 8,
    title: "Noodles",
    cover:
      "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
  },
  {
    id: 9,
    title: "Chowmein",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
  },
  {
    id: 10,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    id: 11,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 12,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 13,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 14,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
];

const DeliveryCollections = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 220;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 220;
  };
  return (
    <div className="delivery-collection bg-gray-50">
      <div className="max-width max-w-5xl mx-auto my-0">
        <div className="collection-title text-2xl mb-8 font-semibold">
          Eat What Makes You Happy
        </div>

        <div className="relative flex items-center my-14">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={35}
          />
          <div
            id="slider"
            className="w-full h-full relative flex items-center overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {deliveryItems.map((item) => {
              return <DeliveryItems key={item.id} item={item} />;
            })}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={35}
            
          />
        </div>
      </div>
    </div>
  );
};
export default DeliveryCollections;
