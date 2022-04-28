import {InjectionKey} from 'vue';
import {createStore, useStore, Store} from 'vuex';
import {UserType} from '../types/common';

export type State = {
  user: UserType;
  isAuthorized: boolean;
};

export const userKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: () => ({
    user: {} as UserType,
    isAuthorized: false,
  }),
  mutations: {
    setUser: (state, value: UserType) => {
      state.user = value;
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.user = {} as UserType;
      state.isAuthorized = false;
    },
  },
});

export const useUserStore = () => {
  return useStore(userKey);
};
