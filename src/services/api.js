import axios from 'axios'

const BASE_URL = 'https://wger.de/api/v2'

export const wgerApi = {
  async getExercises() {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=20`)
    return response.data.results || []
  },

  async searchExercises(query) {
    try {
      const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=100`)
      const allExercises = response.data.results || []
      
      return allExercises.filter(ex => 
        ex.name && ex.name.toLowerCase().includes(query.toLowerCase())
      )
    } catch (error) {
      console.error("WGER API Error:", error)
      throw error 
    }
  }
}