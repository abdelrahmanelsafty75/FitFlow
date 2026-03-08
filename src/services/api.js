import axios from 'axios'

const BASE_URL = 'https://wger.de/api/v2'  

export const wgerApi = {
  async getExercises() {
    const response = await axios.get(`${BASE_URL}/exerciseinfo/?language=2&limit=50`)
    const results = response.data.results || []
    
    return results.map(ex => ({
      ...ex,
      name: ex.translations?.[0]?.name || 'Unnamed Exercise',
      description: ex.translations?.[0]?.description || 'No description available.'
    }))
  },

  async searchExercises(query) {
    if (!query?.trim()) return []

    try {
      const response = await axios.get(
        `${BASE_URL}/exerciseinfo/?language=2&limit=200`  
      )
      const results = response.data.results || []

      const normalized = results.map(ex => ({
        ...ex,
        name: ex.translations?.[0]?.name || 'Unnamed Exercise',
        description: ex.translations?.[0]?.description || 'No description available.'
      }))

      return normalized.filter(ex =>
        ex.name.toLowerCase().includes(query.toLowerCase().trim())
      )
    } catch (error) {
      console.error("WGER API Error:", {
        message: error.message,
        status: error.response?.status,
        url: error.config?.url
      })
      throw error
    }
  }
}