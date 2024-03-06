import axios from 'axios'
const mohEndpoint = '/api/moh'

const getAll = async () => {
  const response = await axios.get(mohEndpoint)
  return response.data
}
export default {
  getAll,
}
