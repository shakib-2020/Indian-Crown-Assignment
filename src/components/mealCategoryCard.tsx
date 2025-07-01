import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MenuItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const MealCategoryCard: React.FC<MenuItemProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => {
  return (
    <Link href={`/category/${title}`}>
      <div className="group rounded-lg overflow-hidden shadow-lg text-white border bottom-0  transition-all duration-500 bg-white/10 backdrop-blur-md border-white/20 relative hover:bottom-3">
        {/* Image & badges */}
        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={altText}
            className="w-full object-cover h-48 transition-transform duration-1500 scale-100 group-hover:scale-115"
            height={100}
            width={100}
          />
        </div>
        {/* Content area */}
        <div className="p-4 -mt-1">
          <h3 className="text-lg text-left font-semibold mb-1">{title}</h3>
          <p className="text-sm text-left truncate  line-clamp-2 font-light mb-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MealCategoryCard;
