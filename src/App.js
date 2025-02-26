import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "./components/ui/provider"
import Home from "./pages/home";
import About from "./pages/about";
import GameScreenshotsPage from "./pages/gameScreenshotsPage.js"

function App() {
  return (
    <Provider>
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="game/:id" element={<GameScreenshotsPage/>} />
          </Routes>
      </Router>  
    </Provider>

  );
}

export default App;