import React from "react";
// handleSingle data =======>
const handleSingleData = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = res.json();
  return data;
};
// next js meta tag =========>
export async function generateMetadata({ params }) {
  const { id } = await params;
  const single = await handleSingleData(id);
  return {
    title: single.strCategory,
    description: single.strInstructions,
  };
}
// component =================>
const MealsDetails = async ({ params }) => {
  const id = await params.id;
  const data = await handleSingleData(id);
  const [mainData] = await data.meals;

  return (
    <div>
      <div className="border m-4 flex justify-center items-center mx-20 px-10">
        <div className=" flex-1">
          <img className=" w-[400px]" src={`${mainData.strMealThumb}`} alt="" />
        </div>
        <div className="flex-1">
          <p className="text-2xl text-green-500"> {mainData?.strMeal} </p>
          <p className=" "> Area : {mainData?.strArea} </p>
          <p className=" "> Category : {mainData?.strCategory} </p>
          <p className=" text-gray-500">
            {" "}
            Description : {mainData?.strInstructions}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealsDetails;
