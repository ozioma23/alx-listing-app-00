import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
<button onClick={onClick}className="px-4 py-2 rounded-lg border hover:opacity-80 transition"
    >
      {label}
    </button>
  );
};

export default Button;
