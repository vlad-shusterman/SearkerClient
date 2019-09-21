<template>
  <div class="container">
    <start-page></start-page>
    <div class="row">
      <div class="col-xs-12">
        <div v-for="(document, index) in documents" :key="document.title">
          <p>{{document.title}}</p>
          <p>{{ document.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/UserService'
import StartPage from './StartPage'
export default {
  name: 'CompaniesListPage',
  components: { StartPage },
  data () {
    return {
      documents: [
        {
          title: 'Title',
          description: 'Description'
        }
      ],
    }
  },
  methods: {
    async getPosts () {

    },
  },
  mounted () {
    this.getPosts()
  },
}
</script>

<style>

</style>
