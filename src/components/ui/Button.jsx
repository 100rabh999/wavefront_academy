import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-1",
    secondary: "bg-white text-navy-900 border border-gray-200 hover:border-accent-500 hover:text-accent-600 shadow-sm hover:shadow-md",
    outline: "border-2 border-accent-500 text-accent-600 hover:bg-accent-50",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
