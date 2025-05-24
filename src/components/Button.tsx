import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = "rounded-md font-medium transition-all duration-200 ease-in-out";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-8 text-lg"
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;