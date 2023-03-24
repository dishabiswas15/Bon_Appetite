const BreweriesItem = ({breweries}) =>{
    return(
        <div>
            <div className="breweries-item-cover w-80 h-96 p-1 m-6 shadow-md border-white bg-white rounded-md hover:scale-105 ease-in-out duration-300">
                <img className="w-full h-64 inline-block p-2 rounded-lg cursor-pointer object-cover opacity-1 transition-opacity"
                src={breweries.cover} alt={breweries.name}/>
                <h1 className="breweries-item-title text-center text-xl font-medium overflow-hidden text-ellipsis mt-1">{breweries.name}</h1>
                <h3 className="text-left ">{breweries.cuisins}</h3>
                <h3>{breweries.address}</h3>
            </div>
        </div>
    )
}
export default BreweriesItem;