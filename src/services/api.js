import axios from 'axios'

const BASE_URL = 'https://wger.de/api/v2'

export const wgerApi = {
  async getExercises() {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=20`)
    return response.data.results
  },

  async searchExercises(query) {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=20`)
    const allExercises = response.data.results
    return allExercises.filter(ex => 
      ex.name.toLowerCase().includes(query.toLowerCase())
    )
  }
}