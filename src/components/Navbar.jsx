import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto bg-slate-900">
        <NavLink to="/">
          <div className="ml-5">
            <img src="logo.png" alt="" className=" h-14"></img>
          </div>
        </NavLink>
        <div className="flex items-center space-x-6 mr-5 text-slate-100 font-medium">
          <NavLink to="/">
            <p className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200"
                height="1em" width="1em"
              />
                {
                  cart.length > 0 && 
                  <span className="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center
                   animate-bounce -top-1 -right-2 rounded-full top- text-white">{cart.length}</span>
                }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
