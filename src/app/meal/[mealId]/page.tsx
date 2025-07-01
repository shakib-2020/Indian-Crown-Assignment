import Image from "next/image";
import React from "react";

async function MealsByCategory({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) {
  const { mealId } = await params;

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const { meals } = await res.json();
  const meal = meals[0];

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const name = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return name && name.trim() !== "" ? `${measure} ${name}` : null;
  }).filter(Boolean);

  return (
    <main className="w-full bg-black">
      <div className="p-6 w-[50%] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">{meal.strMeal}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={500}
            height={300}
            className="rounded-lg"
          />
          <div>
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
            <p className="mt-4">
              <strong>Tags:</strong> {meal.strTags || "None"}
            </p>
            <p className="mt-2">
              <strong>YouTube:</strong>{" "}
              <a
                href={meal.strYoutube}
                className="text-blue-500 underline"
                target="_blank"
              >
                Watch Video
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-300 whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 text-gray-300">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MealsByCategory;
