import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      user: null,
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = null; // 清空用户信息
      // 如果有其他需要清除的状态，也可以在这里处理
    }
  
  }
})


export default store;