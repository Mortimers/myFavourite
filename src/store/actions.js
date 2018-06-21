/**
 * Created by Administrator on 2018/3/29.
 */
export default {
  setLoading({commit}, platform) {
    commit('SET_LOADING', platform)
  },
  setLogin({commit}, platform) {
    commit('SET_LOGIN',platform)
  },
  getMusicList({commit}, platform) {
    commit('GET_MUSIC_LIST', platform)
  }
}
