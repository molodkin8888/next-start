export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden" tabIndex={0}>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h8m-8 6h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </label>
          <ul
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            tabIndex={0}
          >
            <li>
              <a>Photo Library</a>
            </li>
            <li>
              <a>More Details</a>
              <ul className="p-2">
                <li>
                  <a>Comments</a>
                </li>
                <li>
                  <a>Todos</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Users</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Next App</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Photo Library</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>More Details</summary>
              <ul className="p-2">
                <li>
                  <a>Comments</a>
                </li>
                <li>
                  <a>Todos</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Users</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
