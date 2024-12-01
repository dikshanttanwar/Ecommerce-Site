import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "../Utility/Context.jsx";
import {HashRouter} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Context>
      <App />
      <ToastContainer/>
    </Context>
  </HashRouter>
);
