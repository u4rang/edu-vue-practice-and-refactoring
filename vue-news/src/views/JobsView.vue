<template>
  <div>
      <div v-for="job in jobs">{{ job }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  data(){
    return {
      jobs: [],
    }
  },
  created() {
    fetchJobsList()
    // Promise() 처리
      .then((res) => this.jobs = res.data)
      .catch((err) => console.log(err))
  },
}
</script>

<style>

</style>