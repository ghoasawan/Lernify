import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Footer from "./Components/footer/footer.tsx";
import Header from "./Components/header/Header.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Step1 from "./Components/Signup/Step1.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
    <Step1/>
    </StrictMode>
  </BrowserRouter>
);
