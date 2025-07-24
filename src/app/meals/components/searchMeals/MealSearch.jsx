"use client";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MealSearch = () => {
  //   const [mealData, setMealData] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div className="flex justify-center">
      <input
        className="border-blue-700 border "
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearch;
