import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { axiosInstance } from "../utils/axiosInstance";

interface IUser {
  _id: string;
  name: string;
  email: string;
}

const Home = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    handleGetMe();
  }, []);

  const handleGetMe = async () => {
    try {
      const res = await axiosInstance.get("/user/me");
      if (res.status === 200) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.log("axios error ---> ", error);
    }
  };

  return (
    <>
      <div className="w-full h-full flex  bg-gray-50">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full p-5">
          <Topbar />
          <div className="w-full h-16 flex justify-center items-center my-5">
            <h2 className="text-3xl text-gray-600">
              Welcome to Dashboard!{" "}
              <span className=" font-semibold text-black">{user?.name}</span> 👋
            </h2>
          </div>
          <div className=" flex flex-wrap gap-5">
            {[...new Array(10)].map((_, index) => {
              return (
                <div key={index} className="w-60 h-48 bg-indigo-100"></div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
