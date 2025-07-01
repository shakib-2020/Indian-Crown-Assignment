import MealsFilteredList from "@/components/mealsFilteredList";
import SearchInput from "@/components/searchInput";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const data = await res.json();

  return data.meals?.map((cat: any) => ({
    categoryName: cat.strCategory,
  }));
}

async function MealsByCategory({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;

  return (
    <div className="custom-container bg-black flex flex-col items-center">
      <h2 className="text-white text-center text-4xl mb-8">
        Meals By Category - {categoryName}{" "}
      </h2>
      <SearchInput />
      <MealsFilteredList categoryName={categoryName} />
    </div>
  );
}

export default MealsByCategory;
