<template>
  <div>
      <p v-for="item in fetchedNews">
        <a v-bind:href="item.url">{{ item.title}}</a>
        <small> {{ item.time_ago }} by {{ item.user }}</small>
      </p>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // 1
    // fetchNewsList()
    //   .then((res) => {
    //     // 2
    //     this.users = res.data;
    //   })
    //   .catch((err) => console.log(err));
  },
}
</script>

<style>

</style>