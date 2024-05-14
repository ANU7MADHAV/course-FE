import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navbar/UserNavbar";

const UserLayout = () => {
  return (
    <>
      <nav>
        <UserNavbar />
      </nav>
      <Outlet />
    </>
  );
};

export default UserLayout;
