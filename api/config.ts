import axios from 'axios'

export const createAxiosInstance = () => {
  return axios.create({
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8080'
        : 'https://tahwissaoran.herokuapp.com/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}
