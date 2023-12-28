import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
 import "./Cart.css"





const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>


      <div className="fixed bg-gray-300 scroll-auto rounded-xl  right-5 top-1/4 p-4 w-1/4 flex flex-col space-y-10 border-4">

        <div className="">
          <div className="text-xl font-bold">Your Cart</div>
          <div className="text-xl text-emerald-500 font-bold">Summary</div>
          <p>
            <span className="italic">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="text-green-600 my-2 font-bold">Total Amount: ${totalAmount}</p>
          <button className="text-gray-200 animate-bounce px-2 bg-gray-800 font-bold ">
            Order Now
          </button>
        </div>

      </div>


    </div>) : 

    (<div  className="absolute bg-blue-200 border-double border-lime-800 border-2 rounded-lg p-2 left-1/2 top-1/2 flex flex-col">
      <h1 className="p-1 text-green-500 font-bold">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-blue-900 text-yellow-200 border-2 ml-2 p-1 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
