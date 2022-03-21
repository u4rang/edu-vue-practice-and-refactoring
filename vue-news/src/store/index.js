import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

// 상태 관리 도구
// 상태란, 여러 컴포넌트 간에 공유되는 데이터 속성
export const store = new Vuex.Store({
  state: {
      news: [],
      ask: [],
      jobs: [],
  },
  getters: {
    fetchedAsk(state) {
        return state.ask;
    },
    fetchedNews(state) {
        return state.news;
    },
    fetchedJobs(state) {
        return state.jobs;
    },
  },
  mutations,
  actions,
});