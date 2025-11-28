import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      {image && <img src={image} alt={title} className="w-full rounded-md" />}
      <h2 className="mt-2 font-semibold">{title}</h2>
    </div>
  );
};

export default Card;
