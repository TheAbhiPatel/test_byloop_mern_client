const Sidebar = () => {
  return (
    <div className="w-[16rem] h-screen overflow-y-auto bg-white shadow-md sticky top-0">
      <div className="w-full h-10 flex justify-center items-center ">
        <h1 className="text-2xl text-indigo-500 font-semibold">Vuexy</h1>
      </div>
      <div className="flex flex-col gap-2 px-2 mt-2">
        {[...new Array(15)].map((_, index) => {
          return (
            <div key={index} className="w-full p-1 rounded-md bg-gray-100">
              <p>Dashboard</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
