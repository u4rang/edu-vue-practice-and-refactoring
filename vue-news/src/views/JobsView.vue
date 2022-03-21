<template>
  <div>
    <div>
      <p v-for="item in fetchedJobs">
        <a :href="item.url">{{ item.title}}</a>
        <small> {{item.time_ago}}, {{ item.domain }}</small>
      </p>
  </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');

    // fetchJobsList()
    // // Promise() 처리
    //   .then((res) => this.jobs = res.data)
    //   .catch((err) => console.log(err))
  },
}
</script>

<style>

</style>