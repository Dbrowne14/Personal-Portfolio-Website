import Nav from "./Navigation/Nav";
import { Outlet } from "react-router-dom";
import MovingBanner from "../components/ui/movingBanner";

const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto h-full grid grid-rows-[minmax(0,1fr)_minmax(0,10fr)_minmax(0,1fr)] place-items-center">
        <nav className="w-full h-full flex justify-center sticky top-0 z-50 items-center ">
          <Nav />
        </nav>
        <main className="content-width pt-6 sm:pt-15 w-full h-full">
          <Outlet />
        </main>
      </div>
      <MovingBanner />
    </div>
  );
};

export default MainLayout;
