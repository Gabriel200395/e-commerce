import RouteComponent from "./routes";
import { Provider } from "react-redux";
import store from "./context/store";

function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}

export default App;
