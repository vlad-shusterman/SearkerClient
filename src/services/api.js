import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://165.22.208.187:8080'
  })
}
