import React, {useState} from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './WebPartPages/Home'
import ViewProfile from "./WebPartPages/ViewProfile";
import FavoriteViewProfile from "./WebPartPages/FavoriteViewProfile";
function App() {
  const [checkedFavourite, setCheckedFavourite] = useState(true);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home  checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite}/>} />
          <Route exact path="/ViewProfile" element={<ViewProfile checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/FavoriteViewProfile" element={<FavoriteViewProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
