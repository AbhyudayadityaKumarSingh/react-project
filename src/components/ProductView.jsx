// src/components/ProductView.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreedDetails } from '../api';

const ProductView = () => {
  const { breedId } = useParams();
  const [breedDetails, setBreedDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreedDetails = async () => {
      try {
        const data = await fetchBreedDetails(breedId);
        setBreedDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getBreedDetails();
  }, [breedId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <img src={breedDetails.image?.url} alt={breedDetails.name} />
      <h1>{breedDetails.name}</h1>
      <p>Breed Group: {breedDetails.breed_group}</p>
      <p>Bred For: {breedDetails.bred_for}</p>
      <p>Life Span: {breedDetails.life_span}</p>
      <p>Origin: {breedDetails.origin}</p>
    </div>
  );
};

export default ProductView;