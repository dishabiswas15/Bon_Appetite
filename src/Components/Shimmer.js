const Shimmer = () => {
    return (
        <div className="flex justify-between flex-wrap" data-testid="shimmer">
            {
                Array(10).fill("").map((e, index) =>(
                <div key={index} className="shimmer-card w-52 h-52 m-2 p-2 bg-slate-100"></div>
                ))}
            
        </div>
    );
    
};

export default Shimmer;