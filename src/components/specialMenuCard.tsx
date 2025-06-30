import Image from "next/image";
import React from "react";

export interface MenuItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  type: string;
}

const SpecialMenuCard: React.FC<MenuItemProps> = ({
  imageSrc,
  altText,
  title,
  type,
}) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg text-white border transition-all duration-500 bg-white/10 backdrop-blur-md border-white/20 relative">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full object-cover h-[300px] transition-transform duration-300 scale-100 group-hover:scale-110"
          height={100}
          width={100}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10" />
        {/* Title & type */}
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
          <span className="text-white/90 font-base text-base">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
