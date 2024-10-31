import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#1b4332] py-4">
      <header className="container  mx-auto flex items-center justify-between  w-full">
        {/* logo */}
        <div>
          <h2 className="text-white font-bold text-xl">WordAtlas</h2>
        </div>

        {/* links */}
        <div>
          <ul className="flex items-center gap-4 text-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/country">Country</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
