import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import CharactersPage from "./components/pages/CharactersPage";
import Stories from "./components/pages/Stories";
import Series from "./components/pages/Series";
import Comics from "./components/pages/Comics";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/stories" element={<Stories />} />
            <Route exact path="/series" element={<Series />} />
            <Route exact path="/comics" element={<Comics />} />
            <Route exact path="/characters" element={<CharactersPage />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
