import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://vuejs-stock-trader-7e893.firebaseio.com/',
})
