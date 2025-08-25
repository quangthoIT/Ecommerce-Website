import {
  Armchair,
  Check,
  Heart,
  Info,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* Navbar Top */}
      <div className="navbar-top flex items-center justify-center bg-[#272343] h-[45px] w-full px-10">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check /> Free on all orders over $50
          </p>

          <div className="navbar-top-right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-none h-[20px] w-[70px] text-sm font-inter font-normal text-white capitalize cursor-pointer"
            >
              <option className="text-[#636270]">Eng</option>
              <option className="text-[#636270]">Vie</option>
            </select>
            <button>
              <Link className="flex flex-center text-sm  text-white font-inter font-normal capitalize">
                Faqs
              </Link>
            </button>
            <button>
              <Link className="flex flex-center gap-2 text-sm text-white font-inter font-normal capitalize">
                <Info size="18px" />
                Need Help
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Middle */}
      <div className="navbar-middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px] px-10">
        <div className="lg:container grid grid-cols-3 items-center">
          <div className="logo-wrapper flex justify-start items-center">
            <Link
              to="/"
              className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size="3rem" color="#029fae" />
              Comforty
            </Link>
          </div>

          <div className="search-box">
            <form action="#" className="max-w-[440px] h-[40px] relative">
              <input
                type="text"
                placeholder="Search..."
                className="max-w-[440px] w-full h-full bg-white rounded-1g pl-4"
              />
              <button className="absolute to-50% right-4 translate-y-1/2 cursor-pointer">
                <Search size="20px" color="#272343" />
              </button>
            </form>
          </div>

          <div className="navbar-middle-right flex justify-end items-center gap-2">
            <button className="btn capitalize">
              <ShoppingCart />
              Cart <div className="badge badge-sm bg-[#029fae]">2</div>
            </button>

            <button className="btn capitalize">
              <Heart />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <UserRound />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-42 p-2 shadow-sm"
              >
                <li>
                  <a>
                    <Link>Account</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link>Logout</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Bottom */}
      <div className="navbar-bottom flex items-center justify-center w-full h-[70px] bg-white border-b-[1px] border-[#e1e3e5] px-10">
        <div className="lg:container flex items-center justify-between">
          <div className="navbar-bottom-left flex items-center gap-8">
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex items-center gap-5 capitalize"
              >
                <Menu />
                All Categories
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-44 p-2 shadow-sm"
              >
                <li>
                  <a>Chair</a>
                </li>
                <li>
                  <a>Desk</a>
                </li>
                <li>
                  <a>Sofa</a>
                </li>
                <li>
                  <a>Cabinet</a>
                </li>
              </ul>
            </div>

            <nav className=" flex items-center gap-8 text-base font-inter font-medium capitalize text-[#636270]">
              <NavLink to="/" className="text-[#029fae]">
                Home
              </NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>Products</NavLink>
              <NavLink>Pages</NavLink>
              <NavLink>About</NavLink>
            </nav>
          </div>

          <div className="navbar-bottom-right flex items-center text-sm font-inter font-normal capitalize">
            <p className="text-[#636270]">
              Contact: <span className="text-[#272343]">(+84) 123 456 789</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
