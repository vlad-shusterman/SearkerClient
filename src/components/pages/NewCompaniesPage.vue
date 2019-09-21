<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form>
          <div class="form-group">
            <label for="name">Company name</label>
            <input class="form-control" id="name" placeholder="Enter your company name"
                   v-model="company.name">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <div class="input-group">
              <input type="number" class="form-control" id="price" placeholder="Price per hour" v-model="company.price">
              <span class="input-group-addon align-items-center d-flex position-absolute" style="left: 95%; padding-top: 0.5rem;">$</span>
            </div>
          </div>
          <div class="form-group">
            <label for="type">Type of cleaning</label>
            <input class="form-control" id="type" placeholder="Enter the type of cleaning you provide" v-model="company.type">
          </div>
          <div class="form-group d-flex">
            <button type="submit" class="btn btn-primary" @click="addPost()">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import api from '@/services/api'

export default {
  name: 'NewCompaniesPage',
  data () {
    return {
      company: {
        name: '',
        price: 15,
        type: ''
      }
    }
  },
  methods: {
    async addPost () {
      if (this.company.name !== '' && this.company.price !== '') {
        await UserService.addNewCompany({
          name: this.company.name,
          price: this.company.price,
          type: this.company.type
        })
        // this.$router.push({name: 'companies'})
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {}
  }
}
</script>

<style>

</style>
