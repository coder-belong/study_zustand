import { create } from 'zustand'

type State = {
  count: number;
  userData: any[];
  increase: () => void;
  decrease: () => void;
  fetchUserData: () => Promise<void>;
}

const useStore = create<State>((set, get) => ({
  count: 1,
  userData: [],

  // increase: () => set((state) => ({ count: state.count + 1 })),
  // decrease: () => set((state) => ({ count: state.count - 1 })),

  // 也可以使用 get 方法来读取当前状态
  increase: () => set(({ count: get().count + 1 })),
  decrease: () => set(({ count: get().count - 1 })),

  fetchUserData: async () => {
    try {
      // 发起异步请求，将请求数据存储到 zustand 中
      const response = await fetch('http://localhost:3000/api/user/list');
      const res = await response.json();
      set({ userData: res.data })
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  },
}))

export default useStore;