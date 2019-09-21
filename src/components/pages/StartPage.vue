<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="input-group md-form form-sm form-1 pl-0 mt-5">
        <div class="input-group-prepend">
          <span class="input-group-text purple lighten-3" id="basic-text1" @click="search()">
            <i class="fas fa-search text-white" aria-hidden="true"></i>
          </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" v-model="searchLine">
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UserService from '../../services/UserService'

export default {
  name: 'StartPage',
  data () {
    return {
      searchLine: ''
    }
  },
  components: {
    MenuIcon,
    FontAwesomeIcon
  },
  methods: {
    async search () {
      UserService.findDocument(this.searchLine)
      this.$router.push({path: `/search?query=${this.searchLine}`})
    }
  }
}
</script>

<style scoped>

</style>
