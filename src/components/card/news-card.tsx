import React from "react";
import BlurImage from "../shared/blur-image";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
}
const NewsCard = ({ title = "", description = "", image }: NewsCardProps) => {
  return (
    <div className="flex flex-col items-start">
      <BlurImage
        src={image ?? "/card.png"}
        alt={title}
        width={500}
        height={500}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-2 mt-5">
        <h3 className="large_semibold">{title}</h3>
        <span className="small_medium text-neutrals-5">{description}</span>
      </div>
    </div>
  );
};

export default NewsCard;
