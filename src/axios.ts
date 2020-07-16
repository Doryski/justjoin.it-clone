import axios from 'axios'

export const BASE_URL = 'http://localhost:8080/'

export default axios.create({ BASE_URL })
