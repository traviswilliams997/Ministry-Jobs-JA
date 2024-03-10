import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const mtmEndpoint = `${BASE_URL}/api/mtm`

const getAll = async () => {
  const config = {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }
  const response = await axios.get(mtmEndpoint, config)
  return response.data
}
export default {
  getAll,
}
