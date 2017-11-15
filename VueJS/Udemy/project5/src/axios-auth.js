import axios from 'axios'

const instance = axios.create({
  baseUrl: 'https://vuejs-update.firebaseio.com/',
})

export default instance
