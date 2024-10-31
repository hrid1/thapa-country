import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#1b4332] py-4">
      <header className="container  mx-auto flex items-center justify-between  w-full px-4">
        {/* logo */}
        <div>
          <h2 className="text-white font-bold text-xl">WordAtlas</h2>
        </div>

        {/* links */}
        <div>
          <ul className="flex items-center gap-4 text-lg text-[#b7e4c7]">
            <li>
              <NavLink className={({isActive}) => isActive ? `text-white font-bold `: ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? `text-white font-bold `: ""} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? `text-white font-bold `: ""} to="/country">Country</NavLink>
            </li>

            <li>
              <NavLink className={({isActive}) => isActive ? `text-white font-bold `: ""} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
