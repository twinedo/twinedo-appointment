import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface User {
    id: number;
    username: string;
    password: string;
    name: string;
    role: 'user' | 'admin'
}

interface Response {
  status: number;
  message: string;
  data: User;
}

interface UsersState {
  users: User[]
  checkUser?: (username: string, password: string) => Response;
}



const initState: UsersState = {
    users: [
        {
            id: 1,
            username: 'user',
            password: 'password',
            name: 'User 1',
            role: 'user',
        },
        {
            id: 2,
            username: 'admin',
            password: 'password',
            name: 'Admin 1',
            role: 'admin',
        },
    ],
};

const usersStore = create<UsersState>()(
  devtools(
    persist(
      (_, get) => ({
        users: initState.users,
        checkUser: (username: string, password: string) => {
            const dat = get().users;
            const find = dat.find(item => item.username === username && item.password === password);
            if (find) {
                return {
                    status: 200,
                    message: 'Login successfully',
                    data: find,
                } as Response;
            } else {
                return {
                    status: 500,
                    message: 'Username or Password is incorrect',
                    data: {} as User,
                } as Response;
            }
        },
      }),
      { name: 'usersStore', storage: createJSONStorage(() => AsyncStorage)},
    ),
  ),
);

export default usersStore;
