import { Link, Outlet } from "react-router-dom";

export const NavbarLayout = () => {
  const isDev = import.meta.env.VITE_ENVIRONMENT === "DEV";

  return (
    <section className="max-h-screen flex flex-col">
      <header className="relative py-4 px-8 shadow-lg flex items-baseline justify-between">
        {isDev && (
          <div className="absolute top-4 left-4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white px-2 w-screen py-1 text-xs text-center -rotate-45 font-bold">
            DEV
          </div>
        )}
        <h1>
          <Link to="/">La perle</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="px-8 overflow-auto">
        <Outlet />
      </section>
    </section>
  );
};
