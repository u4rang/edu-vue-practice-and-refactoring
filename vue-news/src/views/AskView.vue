<template>
  <div>
      <div v-for="ask in asks">{{ ask }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data(){
    return {
      asks: [],
    }
  },
  created() {
    fetchAskList()
      .then((res) => this.asks = res.data)
      .catch((err) => console.log(err))
  },
}
</script>

<style>

</style>