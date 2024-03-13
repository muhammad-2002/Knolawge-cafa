import Blogs from "./components/Bloges";
import Header from "./components/header";

const App = () => {
  return (
    <div className="global w-[90%] mx-auto mt-10">
      <Header></Header>
      <div className="space-y-48">
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default App;
