
import DiningItems from "./DiningItems";
const DiningOut = ({dining}) => {
  return (
    <div className="Restaurants-collection ">
        <div className="max-width max-w-5xl mx-auto my-0" >
            <div className="Dining-Restaurants text-2xl mt-5 mb-8 font-semibold">Best Dining Restaurants in Kolkata</div>
            <div className="flex flex-wrap justify-center pb-4" >
                
                {dining?.length==0?(<h1>No Restaurant to filter</h1>):( 
                    dining.map((item) => {
                        return(<DiningItems key={item.id} item={item}/>);
                    })
                )}
                

            </div>
        </div>
    </div>
)
};
export default DiningOut;
