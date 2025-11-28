
import { HERO_BG_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/pill";
import PropertyCard from "@/components/common/PropertyCard";
import { useState } from "react";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Mountain View", "Pet Friendly"];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter properties based on active filter (simple example using category)
  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;
  return (
    <div>
      <section
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      >
        <h1 className="text-5xl font-bold text-white">
          Find your favorite place here!
        </h1>
        <p className="mt-4 text-xl text-white">
          The best prices for over 2 million properties worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
          Explore Now
        </button>
      </section>

       <section className="py-8 px-4 flex justify-center gap-4 flex-wrap">
        {filters.map((filter, idx) => (
          <Pill
            key={idx}
            label={filter}
            onClick={() =>
              setActiveFilter(activeFilter === filter ? null : filter)
            }
          />
        ))}
      </section>

       <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
