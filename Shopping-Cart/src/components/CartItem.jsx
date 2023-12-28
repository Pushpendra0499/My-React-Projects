
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="m-4 ">

      <div className="w-3/4 flex flex-row">

        <div>
          <img src={item.image} className="w-40"/>
        </div>

        <div className="w-3/4 p-4  h-auto border-gray-700 rounded-lg flex flex-col">
          <h1 className="text-blue-800  rounded-2xl px-2 mb-1 text-xl font-bold py-2  ">{item.title}</h1>
          <h1 className="w-auto bg-gray-100 text-gray-800 rounded-2xl px-3">{item.description}</h1>
          <div className="flex flex-row justify-between px-20 py-4 bg-gray-200 mt-1 rounded-3xl">
            <p className="font-bold animate-pulse text-emerald-600 border-1 ring-offset-slate-50	">${item.price}</p>
            <div
            onClick={removeFromCart} className="w-4 h-4 rounded-2xler scale-150 animate-pulse shadow-sm shadow-red-500">
              <MdDeleteForever /> 
            </div>
          </div>

        </div>



      </div>

    </div>
  );
};

export default CartItem;
