import axios from 'axios'

export const baseURL = 'https://justjoin.herokuapp.com'

export default axios.create({ baseURL })
