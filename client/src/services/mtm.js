import axios from 'axios'
const mtmEndpoint = '/api/mtm'

const getAll = async () => {
  const response = await axios.get(mtmEndpoint)
  return response.data
}
export default {
  getAll,
}
