import axios from 'axios'
const miicEndpoint = '/api/miic'

const getAll = async () => {
  const response = await axios.get(miicEndpoint)
  return response.data
}
export default {
  getAll,
}
