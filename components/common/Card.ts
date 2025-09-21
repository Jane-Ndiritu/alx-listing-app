import React from 'react';
import Button from './Button';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  location: string;
  onBook?: () => void;
  onDetails?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  location,
  onBook,
  onDetails,
}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md border bg-white hover:shadow-lg transition">

      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        <p className="mt-3 font-bold text-gray-800">{price}</p>

