<template>
  <div>
      <p v-for="item in fetchedAsk">
        <a v-bind:href="item.url">{{ item.title}}</a>
        <small> {{ item.time_ago }} by {{ item.user }}</small>
      </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    // 3. Spread Operator
    // 3.2 배열
    ...mapGetters([
      'fetchedAsk'      
    ]),
    // 3.1 객체
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk'
    // })

    // 2.
    // ...mapState({
    //   ask: state => state.ask
    // }),
    // 1.
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');

    // fetchAskList()
    //   .then((res) => this.asks = res.data)
    //   .catch((err) => console.log(err))
  },
}
</script>

<style>

</style>