// src/api.js
import axios from 'axios';

const API_KEY = 'live_aRCpEze43rl8dvbiQmPGg2pah27SUxFImXhLEU9LLjf8kp6JJnJtpiQPP5VXZsGE'; // Replace with your actual API key
const API_URL = 'https://api.thedogapi.com/v1';

export const fetchBreeds = async () => {
  const response = await axios.get(`${API_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  return response.data;
};
// src/api.js
export const fetchBreedDetails = async (breedId) => {
    const response = await axios.get(`${API_URL}/breeds/${breedId}`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  };
  