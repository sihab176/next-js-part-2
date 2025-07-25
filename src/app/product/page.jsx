import React from "react";

const getProduct = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();
  console.log("data", data);
  return (
    <div className="grid grid-cols-3 my-20 gap-20 max-w-7xl mx-auto ">
      {data.map((item) => (
        <div className=" border-2 p-5 bg-[#3c6e71]">
          <div>
            <h1 className="text-4xl font-bold text-orange-400">{item.name}</h1>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default getProduct;
