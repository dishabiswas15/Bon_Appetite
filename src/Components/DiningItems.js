const DiningItems = ({ item }) => {
  return (
    <div className="pb-5">
      <div className="dining-item-cover w-72 h-96 p-1 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300 ">
        <img
          src={item.cover}
          className="dining-item-image inline-block p-2 cursor-pointer rounded-lg
           object-cover w-full h-64 opacity-1 transition-opacity "
          alt={item.title}
        />
        <h1 className="delivery-item-title text-center text-xl font-medium overflow-hidden text-ellipsis mt-1">
          {item.title}
        </h1>
        <h3 className="text-left overflow-hidden text-ellipsis whitespace-nowrap">{item.cuisin}</h3>
        <h3>{item.cost}</h3>
        <h3>{item.address}</h3>
      </div>
    </div>
  );
};
export default DiningItems;
