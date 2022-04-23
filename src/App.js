import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Header } from "./components/Header";
import { AlertState } from "./contex/alert/AlertState";
import { FirebaseState } from "./contex/firebase/FirebaseState";
import About from "./pages/About";
import { Home } from "./pages/Home";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <FirebaseState>
        <AlertState>
          <Router>
            <Header />
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </Router>
        </AlertState>
      </FirebaseState>
    </div>
  );
}

export default App;
