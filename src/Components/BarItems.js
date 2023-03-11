const BarItems = ({ bar }) => {
  return (
    <div>
      <div className="bar-item-cover w-80 h-96 p-1 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300 ">
        <img
          className="bar-item-image inline-block p-2 cursor-pointer rounded-lg
        object-cover w-full h-64 opacity-1 transition-opacity "
          src={bar.cover}
          alt={bar.name}
        />
        <h1 className="bar-item-title text-center text-xl font-medium overflow-hidden text-ellipsis mt-1">
          {bar.name}
        </h1>
        <h3 className="text-left overflow-hidden text-ellipsis whitespace-nowrap">
          {bar.cuisins}
        </h3>

        <h3>{bar.address}</h3>
      </div>
    </div>
  );
};
export default BarItems;
