import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className=" col-end-1 bg-blue-950 mx-auto my-auto rounded-xl left-6 p-4 inline-block flex flex-col items-center space-y-5 border-4">
            <div className="flex flex-col bg-white rounded-md p-4 shadow-md">
              <div className="text-xl font-bold text-blue-800">Your Cart</div>
              <div className="text-xl text-green-500 font-bold">Summary</div>
              <p>
                <span className="italic bg-red-500 px-2 rounded-sm text-white">Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="rounded-2xl bg-white px-2 shadow-md">
              <p className="text-green-500 my-2 font-bold">
                Total Amount: ${totalAmount}
              </p>
              <Link to={"/"}>
              <button className="text-white mx-10 animate-bounce px-2 bg-red-500 font-bold">
                Order Now
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bg-gray-200 border-double border-green-800 border-2 rounded-lg p-2 left-1/2 top-1/2 flex flex-col">
          <h1 className="p-1 text-blue-500 font-bold">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 text-green-200 border-2 ml-2 p-1 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
