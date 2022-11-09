import RoutesMain from "./routes";
import { Loading } from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Loading />
      <RoutesMain />
    </div>
  );
};

export default App;
