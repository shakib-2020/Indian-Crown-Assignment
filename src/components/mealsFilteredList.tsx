"use client";
import { useGetMealsQuery } from "@/api/mealsApi";
import { RootState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface mealsType {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function MealsFilteredList({
  categoryName,
}: {
  categoryName: string;
}) {
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const { data, isLoading } = useGetMealsQuery(categoryName);

  const filtered = data?.meals.filter((item: any) =>
    item?.strMeal?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  if (isLoading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="flex flex-col items-center text-center">
      {filtered.map((meal: mealsType, index: number) => (
        <div className="flex flex-col gap-1 mb-4 items-center" key={index}>
          <Image
            src={meal?.strMealThumb}
            alt={"meal image"}
            height={100}
            width={100}
          />
          <Link href={`/meal/${meal?.idMeal}`} className="text-blue-400">
            {index + 1}: {meal?.strMeal}
          </Link>
        </div>
      ))}
    </div>
  );
}
