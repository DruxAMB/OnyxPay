import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;