import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import usersStore from '../users';

interface Auth {
  id: number;
  username: string;
  password?: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthState {
  isLoading?: boolean;
  isLoggedIn?: boolean;
  data: Auth;
  login?: (data: {username: string; password: string}) => void;
  logout?: () => void;
}

const initState: AuthState = {
  data: {
    id: 0,
    username: '',
    name: '',
    role: 'user',
  },
  login: (data: {username: string; password: string}) => data,
};

const authStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        isLoading: false,
        data: initState.data,
        login: data => {
          const find = usersStore.getState().checkUser;
          const response = find?.(data.username, data.password);
          console.log('resauth', response);
          if (response?.status === 200) {
            set(() => ({data: response.data, isLoggedIn: true}));
          } else {
            set(() => ({data: initState.data, isLoggedIn: false}));
          }
        },
        logout: () => set(() => ({data: initState.data, isLoggedIn: false})),
      }),
      {name: 'authStore', storage: createJSONStorage(() => AsyncStorage)},
    ),
  ),
);

export default authStore;
