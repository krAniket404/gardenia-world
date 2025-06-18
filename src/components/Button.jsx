import React from 'react';

const Button = ({ children, variant = 'primary', icon, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md uppercase cursor-pointer transition-all duration-300 relative group font-semibold ${
        variant === 'primary'
          ? 'bg-blue-primary text-white'
          : 'border-2 border-blue-primary text-blue-primary'
      }`}
      {...props}
    >
      {children}
      {icon && (
        <span className="-ml-4 opacity-0 group-hover:ml-4 text-xl relative group-hover:opacity-100 transition-all duration-300">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
