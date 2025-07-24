import MealSearch from "./components/searchMeals/MealSearch";

const mealPage = async ({ searchParams }) => {
  const query = await searchParams;
  console.log(query ,"query");
  // const mealData = [];
  //*    HANDLE FETCH =========>
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      // setMealData(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  };

  const mealData = await fetchMeals();

  return (
    <>
      <div>
        <MealSearch />
      </div>

      <div className="grid grid-cols-4 w-11/12 mx-auto">
        {mealData?.map((meal) => (
          <div className="border m-4">
            <div className="flex justify-center items-center">
              <img className="w-40 " src={`${meal.strMealThumb}`} alt="" />
            </div>
            <p className="text-2xl text-center"> {meal?.strMeal} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default mealPage;
