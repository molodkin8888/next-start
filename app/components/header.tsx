import Link from 'next/link';

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
              <Link href="/photos">Photo Library</Link>
            </li>
            <li>
              <a>More Details</a>
              <ul className="p-2">
                <li>
                  <Link href="/posts">Posts</Link>
                </li>
                <li>
                  <Link href="/todos">Todos</Link>
                </li>
                <li>
                  <Link href="/counter">Counter</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Next App</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/photos">Photo Library</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>More Details</summary>
              <ul className="p-2">
                <li>
                  <Link href="/posts">Posts</Link>
                </li>
                <li>
                  <Link href="/todos">Todos</Link>
                </li>
                <li>
                  <Link href="/counter">Counter</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
