import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(res => {
        //   console.log(res.data);

        // commit 메소드로 mutation 에 데이터 넘기기
        context.commit('SET_NEWS', res.data);
        })
        .catch(err => {
            console.error(err);
        });
    },
    // javascript destructuring
    FETCH_ASK({ commit }) {
        fetchAskList()
        
        .then(({ data }) => {
            commit('SET_ASK', data)
        })
        .catch(err => {
            console.error(err);
        });
    },
    FETCH_JOBS(context) {
        fetchJobsList()
        .then(res => {
            context.commit('SET_JOBS', res.data);
        })
        .catch(err => {
            console.error(err);
        });
    },

}