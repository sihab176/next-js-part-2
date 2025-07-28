import React from "react";

export const dynamic = "force-dynamic"; // this is for force dynamic rendering
const ProductList = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/items`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    return <div className="text-center my-20">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-3 my-20 gap-20 max-w-7xl mx-auto ">
      {data?.map((item) => (
        <div
          key={item?._id}
          className="border-2 p-5 bg-[#3c6e71] relative z-10 overflow-hidden group "
        >
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-orange-400">{item.name}</h1>
            <p>{item?.category} </p>
            <p>{item?.price}</p>
            <p>{item?.description}</p>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-indigo-500  transition-all duration-700 ease-out group-hover:h-full z-0"></span>
          <div>
            <button
              type="submit"
              className="relative z-10 px-6 py-3  font-semibold  w-32 ml-4  btn bg-purple-400 overflow-hidden group shadow-xl"
            >
              <span className="relative z-10">Add Book</span>

              {/* Left-to-right background sweep effect */}
              <span className="absolute bottom-0 left-0 w-full h-0 bg-sky-300 transition-all duration-700 ease-out group-hover:h-full z-0"></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
