import MealCategories from "@/components/mealCategories";
import { Clock, MapPinIcon, Phone } from "lucide-react";

export default async function Home() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const { categories } = await res.json();
  return (
    <div>
      {/* Category */}
      <section className="relative w-full overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[url(/images/deal.webp)] bg-fixed bg-center" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10" />
        <div className="custom-container w-full relative z-20">
          <div className="mb-16 text-center">
            <h2 className="text-4xl text-white mb-5 font-serif">
              Meal Category
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <MealCategories categories={categories} />
        </div>
      </section>
    </div>
  );
}
