import Image from "next/image";
import React from "react";

export interface MenuItemProps {
  imageSrc: string;
  altText: string;
  rating: number;
  badgeText?: string;
  title: string;
  price: number;
  oldPrice?: number;
  calories?: number;
}

const SpecialDealCard: React.FC<MenuItemProps> = ({
  imageSrc,
  altText,
  rating,
  badgeText,
  title,
  price,
  oldPrice,
  calories,
}) => {
  return (
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
        {/* Rating */}
        <div className="absolute top-3 left-3 bg-white/90 text-amber-400 rounded-full px-2 flex items-center space-x-1 font-semibold text-sm shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.82 11.18 1 7.09l6.061-.52L10 1l2.939 5.57 6.061.52-4.82 4.09 1.698 6.91z" />
          </svg>
          <span className="text-black">{rating}</span>
        </div>
        {/* Badge */}
        {badgeText && (
          <div className="absolute top-3 right-3 bg-orange-400 text-white rounded-full px-3 py-1 text-xs font-semibold select-none shadow-lg">
            {badgeText}
          </div>
        )}
      </div>
      {/* Content area */}
      <div className="p-4 -mt-1">
        <h3 className="text-lg text-left font-semibold mb-1">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-orange-500 font-bold text-lg">${price}</span>{" "}
            <span className="line-through text-gray-400 text-sm">
              ${oldPrice}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-gray-300 text-sm">
          <span>{calories} cal</span>
          <button
            aria-label={`More details about ${title}`}
            className="text-orange-500 hover:text-orange-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialDealCard;
