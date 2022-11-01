import RoutesMain from "./routes";
import { Loading } from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <Loading />
      <RoutesMain />
      <ToastContainer />
    </div>
  );
};

export default App;
