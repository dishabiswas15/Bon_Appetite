import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  let total = 0;
  if (cartItems.length > 0) {
    cartItems.forEach((element) => {
      total += (element.card.info.price / 100) * element?.qty;
    });
  }

  return (
    <div className="w-96 ml-96 mt-10 mx-6 p-20 sm:p-0 xsm:p-0 mob:p-0 sm:flex-col xsm:flex-col mob:flex-col">
      <div className="bg-white drop-shadow-md flex-2 p-6 w-auto">
        <div className="justify-between flex items-center mb-2">
          <h1 className="font-bold text- 3xl">Cart Items </h1>
          <button
            className="bg-green-100 p-2 m-2 hover:bg-green-300 rounded-md"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="my-3">
          <div>
            {cartItems.map((item) => (
              <>
                <div className="flex">
                  <p className="justify-center p-6 w-48 text-sm">
                    {item.card.info.name}
                  </p>
                  <div className="px-5">
                    <div className="flex items-center border border-gray-300 w-16 justify-around">
                      <button className="text-xl">-</button>
                      <p className="text-green-300 text-xs">{item.qty}</p>
                      <button className="text-xl">+</button>
                    </div>
                  </div>

                  <p>{item.card.info.price / 100}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="border border-black my-2"></div>
        <div className="flex justify-between">
          <p className="font-bold text-sm">To Pay</p>
          <p>{total}/-</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
