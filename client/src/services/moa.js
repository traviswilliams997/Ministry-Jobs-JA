import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const moaEndpoint = `${BASE_URL}/api/moa`

const getAll = async () => {
  const config = {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }
  const response = await axios.get(moaEndpoint, config)
  return response.data
}
export default {
  getAll,
}
