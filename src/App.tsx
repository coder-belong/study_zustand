import { useEffect } from "react";
import Home from "./components/Home";
import userStore from "./store/userStore";

const App: React.FC = () => {
  // 方式一：直接使用 Hook 来访问状态和状态更新函数。
  // const { count, increase, decrease, fetchUserData, userData } = userStore();

  // 方式二：使用选择器优化状态读取，避免组件重新渲染。选择器可以精确地订阅状态的某一部分变化。
  const count = userStore((state) => state.count);
  const increase = userStore((state) => state.increase);
  const decrease = userStore((state) => state.decrease);

  useEffect(() => {
    // fetchUserData();
  }, []);

  return (
    <>
      <h2>belong</h2>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={() => userStore.setState({ count: 9999 })}>
        直接通过store实例的setState方法来更新state
      </button>

      {/*通过store实例的 getState 方法来获取state  */}
      <h3>{JSON.stringify(userStore.getState())}</h3>
      {/* <h3>{JSON.stringify(userData)}</h3> */}
      <Home />
    </>
  );
};

export default App;
