
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<PropertyProps> = ({ name, image, price, rating }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-blue-500 font-bold">${price} / night</p>
        <p className="text-yellow-500">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
