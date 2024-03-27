import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const miicEndpoint = `${BASE_URL}/api/miic`

const getAll = async () => {
  const config = {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }
  const response = await axios.get(miicEndpoint, config)
  return response.data
}
export default {
  getAll,
}
