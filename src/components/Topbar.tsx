import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="w-full h-16 flex rounded-md bg-white shadow-md ">
      <div className="w-[90%]"></div>
      <div className="w-[10%] h-full flex justify-center items-center ">
        <button
          onClick={handleLogout}
          className="bg-indigo-500 text-white rounded-md px-3 p-1"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
