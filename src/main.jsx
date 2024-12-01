import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "../Utility/Context.jsx";
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
      <ToastContainer/>
    </Context>
  </BrowserRouter>
);
