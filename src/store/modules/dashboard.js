import req from '@/utils/http/request';
import api from '@/utils/http/api';

const state = {
  type: '',
  boardData: []
}


const getters = {}


const actions = {
  getBoardData(context, id) {
    req.get(api.getBoardData + '?id=' + id)
      .then((response) => {
        console.log("getBoardData",response);
        if(response.statusText === 'OK') {
          const payload = {
            type: response.data.layout.type,
            boardData: response.data
          }
          context.commit('setBoardData', payload);
          //this.type = response.data.layout.type || '';
          //this.$store.commit('dashboard/getBoardData', { data: response.data });
          //this.$store.dispatch('dashboard/test', 123)
        }
      });
  }
}


const mutations = {
  setBoardData(state, payload) {
    state.type = payload.type;
    state.boardData = payload.boardData;
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}