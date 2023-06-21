import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './WebPartPages/Home'
import ViewProfile from "./WebPartPages/ViewProfile";
import FavoriteViewProfile from "./WebPartPages/FavoriteViewProfile";
import PendingPage from "./WebPartPages/PendingPage";
function App() {
  const [checked, setChecked] = useState(false);
  const foo = () => {
    setChecked(!checked)
  }
  const [checkedFavourite, setCheckedFavourite] = useState(true);
  return (
    <div className={checked?"body_background_white":"body_background"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/ViewProfile" element={<ViewProfile checked={checked} setChecked={foo}checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/FavoriteViewProfile" element={<FavoriteViewProfile />} />
          <Route exact path="/PendingPage" element={<PendingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
