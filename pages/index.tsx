import React from 'react';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
 
  const listings = [
    {
      id: 1,
      imageUrl: '/assets/images/placeholder.png',
      title: 'Modern Apartment',
      description: '2 guests · 1 bedroom · 1 bath',
      price: '$120/night',
      location: 'Nairobi, Kenya',
    },
    {
      id: 2,
      imageUrl: '/assets/images/placeholder.png',
      title: 'Cozy Cottage',
      description: '4 guests · 2 bedrooms · 2 baths',
      price: '$200/night',
      location: 'Mombasa, Kenya',
    },
    {
      id: 3,
      imageUrl: '/assets/images/placeholder.png',
      title: 'Beachside Villa',
      description: '6 guests · 3 bedrooms · 3 baths',
      price: '$450/night',
      location: 'Diani, Kenya',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-red-500">Airbnb Clone</h1>
        <p className="text-gray-600">Find your next stay</p>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              imageUrl={listing.imageUrl}
              title={listing.title}
              description={listing.description}
              price={listing.price}
              location={listing.location}
              onBook={() => alert(`Booking started for ${listing.title}`)}
              onDetails={() => alert(`Details for ${listing.title}`)}
            />
          ))}
    
