import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  Route,
  BrowserRouter,
  Routes,
  Switch
} from "react-router-dom";


function App() {
  const [btn1, setbtn] = useState("Enable Dark mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils-Darkmode";
      setbtn("Enable Light mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils-Lightmode";
      setbtn("Enable Dark mode");
    }
  };
  return (
    <>
      <div className="container my-3">
        <BrowserRouter>
          <Navbar
            title="TextUtils2"
            aboutText="About"
            btn1={btn1}
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <Routes>
            <Route
               path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
