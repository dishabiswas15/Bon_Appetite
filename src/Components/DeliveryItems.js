const DeliveryItems = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover w-[220px] shadow-md border-white bg-white rounded-full">
        <img
          src={item.cover}
          className="delivery-item-image inline-block p-2 cursor-pointer 
          hover:scale-105 ease-in-out duration-300 object-cover w-full rounded-full"
          alt={item.title}
        />
      </div>
      <div className="delivery-item-title text-center text-xl font-medium overflow-hidden text-ellipsis mt-1">
        {item.title}
      </div>
    </div>
  );
};
export default DeliveryItems;
