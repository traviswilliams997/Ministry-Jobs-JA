import axios from 'axios'
const moaEndpoint = '/api/moa'

const getAll = async () => {
  const response = await axios.get(moaEndpoint)
  return response.data
}
export default {
  getAll,
}
