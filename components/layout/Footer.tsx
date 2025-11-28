import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>&copy; {new Date().getFullYear()} MyListingApp. All rights reserved.</p>
      <p className="mt-2 text-sm text-gray-400">
        Made with ❤️ using Next.js and Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
