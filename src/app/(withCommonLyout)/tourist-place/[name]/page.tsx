"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import TouristPlaceDetails from './_components/place-details';

interface TTouristPlace {
  id: number
  category_id: number
  name: string
  location: string
  description: string
  short_description: string | null
  history: string
  architecture: string
  how_to_go: string
  where_to_stay: string
  where_to_eat: string
  ticket_price: string
  opening_hours: string
  best_time_to_visit: string
  image_url: string
  gallery: (string | null)[]
  map_link: string
  main_attractions: string
  purpose_and_significance: string
  special_features: string
}

const SinglePlace = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name as string);

  const [place, setPlace] = useState<TTouristPlace | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(`https://api.panchagarhtourguide.gov.bd/api/tourist-places/name/${name}`);
        if (!response.ok) {
          throw new Error('Place not found');
        }
        const data = await response.json();
        setPlace(data.data); // assuming the place data is under `data.data`
      } catch (err) {
        setError("This place could not be found. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlace();
  }, [name]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[58vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">{decodedName} লোড হচ্ছে ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[58vh]">
        <p className="text-xl text-red-500 font-semibold">{decodedName} পাওয়া যায়নি।</p>
        <p className="text-gray-600 mt-2">অনুগ্রহ করে সঠিক তথ্য দিন অথবা পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      {place && <TouristPlaceDetails touristPlace={place} />}
    </div>
  );
};

export default SinglePlace;
