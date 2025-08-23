import "./App.css";
import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
