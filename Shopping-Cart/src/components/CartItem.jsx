import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="mb-2 p-0 bg-gray-300 border-2 mt-2 lg:w-1/2   lg:flex-1 lg:justify-center border-blue-600 rounded-md shadow-md mx-auto">

      <div className="pb-0 flex flex-col lg:flex-row items-center">
        {/* Show image on very small screens (lg and below) */}
        <div className="mb-4 lg:mr-4 lg:mb-0 lg:w-1/2">
          <img src={item.image} className="w-full  object-cover md:scale-90 rounded-md animate-pulse lg:w-40 lg:h-40 xl:w-64 xl:h-64 lg:object-fill" alt={item.title} />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-blue-800 font-semibold text-lg">
            {item.title}
          </h1>
          {/* Hide description on mobile screens (lg and below) */}
          <p className="hidden lg:block text-gray-600 mt-1">
            {item.description}
          </p>
          <div className="flex justify-between items-center px-4 mt-2 mb-2">
            <p className="text-gray-800 font-medium">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="cursor-pointer md:scale-150 h-6 w-6 flex items-center justify-center rounded-full hover:bg-red-100 transition duration-300"
            >
              <MdDeleteForever className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
