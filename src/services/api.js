import axios from 'axios';

const BASE_URL = 'https://wger.de/api/v2';

export const fetchExercises = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=20`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
};