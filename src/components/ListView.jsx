// src/components/ListView.jsx
import React, { useState, useEffect, useRef } from 'react';
import { fetchBreeds } from '../api';

const ListView = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    const getBreeds = async () => {
      try {
        setLoading(true);
        const data = await fetchBreeds(page);
        setBreeds((prev) => [...prev, ...data]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getBreeds();
  }, [page]);

  const lastBreedElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {breeds.map((breed, index) => (
        <div
          key={breed.id}
          ref={breeds.length === index + 1 ? lastBreedElementRef : null}
          className="card"
          onClick={() => onSelectBreed(breed)}
        >
          <img src={breed.image?.url} alt={breed.name} />
          <h2>{breed.name}</h2>
          <p>{breed.bred_for}</p>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ListView;
