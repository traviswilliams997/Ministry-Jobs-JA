import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const mohEndpoint = `${BASE_URL}/api/moh`

const getAll = async () => {
  const config = {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }
  const response = await axios.get(mohEndpoint, config)
  return response.data
}
export default {
  getAll,
}
