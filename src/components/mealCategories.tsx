// src/components/ProductsClient.tsx
"use client";
import MealCategoryCard from "./mealCategoryCard";

export default function MealCategories({ categories }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
      {categories?.map((item: any, index: any) => (
        <MealCategoryCard
          key={index}
          imageSrc={item?.strCategoryThumb}
          altText={item?.strCategory}
          title={item?.strCategory}
          description={item?.strCategoryDescription}
        />
      ))}
    </div>
  );
}
