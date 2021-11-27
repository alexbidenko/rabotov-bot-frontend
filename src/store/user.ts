import {InjectionKey} from 'vue';
import {createStore, useStore, Store} from 'vuex';

export interface State {
  user: null,
}

export const userKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser: (state, value) => {
      state.user = value;
    },
  },
});

export const useUserStore = () => {
  return useStore(userKey);
};
