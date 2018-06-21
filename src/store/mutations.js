/**
 * Created by Administrator on 2018/3/29.
 */
export default {
  SET_LOADING(state, platform) {
      state.isLoading = platform;
  },
  SET_LOGIN(state, platform) {
      if (platform) {
        window.sessionStorage.setItem('isLogin', platform);
      } else {
        window.sessionStorage.removeItem('isLogin');
      }
      state.isLogin = platform;
  },
  GET_MUSIC_LIST(state, platform) {
      state.musiclist = platform
  }
}
