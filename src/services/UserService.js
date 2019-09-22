import api from '@/services/api'

export default {
  findDocument(body) {
    return api().get(`http://165.22.208.187:8080/search?query=${body}`)
  },
  getDocument(document) {
    return api().get(`http://165.22.208.187:8080${document}`)
  }
}
