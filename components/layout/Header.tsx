import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">MyListingApp</div>

      {/* Types of accommodation */}
      <nav className="flex gap-4 mt-2 md:mt-0">
        <button className="px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200 transition">
          Rooms
        </button>
        <button className="px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200 transition">
          Mansion
        </button>
        <button className="px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200 transition">
          Countryside
        </button>
      </nav>

      {/* Search bar and buttons */}
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search properties..."
          className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Sign In
        </button>
        <button className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
