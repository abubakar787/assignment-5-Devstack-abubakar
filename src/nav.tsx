const Nav = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-white border-b border-gray-100 px-5 lg:px-10">
      <div className="navbar-start">
        
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#technologies">Technologies</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </span>

          <span>
            Dev<span className="text-pink-500">Stack</span>
          </span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-sm">
          <li>
            <a className="text-pink-500 font-medium" href="#home">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm font-normal">
          Sign In
        </button>

        <button className="btn btn-sm border-none bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white hover:opacity-90">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;