<template>
  <div class="container">
    <start-page @documents="getDocuments"></start-page>
    <div class="row mt-5">
      <div class="col-md-12 mt-5 list-group">
        <div v-for="(document) in documents" :key="document.title" class="mt-5 card search-link text-left">
          <div class="card-header">
            <p>{{document.data.title}}</p>
          </div>
          <div class="card-body">
            <p>{{ document.data.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StartPage from './StartPage'
import UserService from '../../services/UserService'

export default {
  name: 'CompaniesListPage',
  components: { StartPage },
  data () {
    return {
      documents: [],
      documentsResponse: '',
    }
  },
  methods: {
    getDocuments (response) {
      this.documentsResponse = response
      this.documents = []
      this.getDocument(0)
    },
    getDocument (index) {
      UserService.getDocument(this.documentsResponse[index].document)
        .then((result) => {
          this.documents.push(result)
          console.log(this.documents[index].data)
          if (index + 1 < this.documentsResponse.length) {
            this.getDocument(index + 1)
          }
        })
    },
  },
}
</script>

<style scoped>
.search-link {
  /*background-color: #0f6674;*/
}
</style>
