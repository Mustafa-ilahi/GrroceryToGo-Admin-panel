import "./App.css";
import Router from "./config/router";
import store from "./store";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
