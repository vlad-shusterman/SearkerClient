<template>
  <div class="container">
    <div class="row justify-content-center mt-5 ml-5">
      <div class="col-10 mt-5">
        <form class="form-inline mt-5">
          <div @click="search()" >
            <i class="fas fa-search search-page-icon" aria-hidden="true"/>
          </div>
          <input class="form-control form-control-md ml-3 w-75" type="text" placeholder="Search"
                 aria-label="Search" v-model="searchLine">
        </form>
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
      searchLine: '',
      searchResponse: ''
    }
  },
  components: {
    MenuIcon,
    FontAwesomeIcon
  },
  methods: {
    search () {
      UserService.findDocument(this.searchLine).then((result) => {
        this.searchResponse = result
        this.$emit('documents', result.data.documents)
      })
    }
  }
}
</script>

<style scoped>
.search-page-icon {
  cursor: pointer;
}
</style>
