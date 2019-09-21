import api from '@/services/api'

export default {
  findDocument(body) {
    return api().get(`http://localhost:8080/search?${body}`)
  },
  addNewCompany(params) {
    return api().post('companies', params)
  }
}
