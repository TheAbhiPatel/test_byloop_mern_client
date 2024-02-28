import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivatePages: FC = () => {
  const token = localStorage.getItem("@accessToken");

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivatePages;
