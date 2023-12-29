import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between items-center h-20 max-w-6xl px-5 md:px-0 mx-auto">
        <NavLink to="/" className="md:ml-5">
          <h1 className="italic flex font-bold text-gray-200 text-2xl md:text-5xl">
            Shopping < FaShopify />Cart
          </h1>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mt-4 md:mt-0 ">
          <NavLink to="/" className="mr-4 md:mr-6">
            <p className="italic font-bold">Home</p> 
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-xl md:text-2xl" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-2 bg-green-600 text-xs md:text-sm w-5 h-5 md:w-6 md:h-6 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
