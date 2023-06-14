import DinCarouselItems from "./DinCarouselItems";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
export const carouselItems = [
  {
    id: 1,
    cover:
      "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232844.jpg?output-format=webp",
    name: "Bars and Pubs",
    description: "Bars and Pubs are here",
    
    
  },
  {
    id: 2,
    cover:
      "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675237481.jpg?output-format=webp",
    name: "MicroBreweries",
    description: "MicroBreweries are here",
  },
];

export const DiningCarousel = () => {
  return (
    <div className="delivery-collection bg-gray-50 pb-14">
      <div className="max-width max-w-5xl mx-auto my-0">
        <div className="relative flex items-center">
          {carouselItems.map((carousel) => {
            return (
              <Link to={"dining/" + carousel.id}>
                {" "}
                <DinCarouselItems key={carousel.id} carousel={carousel} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
// const BarsPubs = () => {
//   return (
//     <>
//       <img
//         className="relative max-w-7xl mx-auto my-1 rounded-lg"
//         src="https://b.zmtcdn.com/data/collections/d2bf1a1e8403e207dc4001ee5021de91_1675232845.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
//       />

//       <div>
//         <div className="flex flex-wrap justify-center">
//           {carouselItems.map((bar) => {
//             return (
              
              
//               <BarItems key={bar.data.id} bar={bar} />
              
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

