import userStore from "../store/userStore";

const Home: React.FC = () => {
  const { count } = userStore();
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Home;
