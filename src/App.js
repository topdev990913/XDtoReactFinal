import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './WebPartPages/Home'
import ViewProfile from "./WebPartPages/ViewProfile";
import FavoriteViewProfile from "./WebPartPages/FavoriteViewProfile";
import PendingPage from "./WebPartPages/PendingPage";
import PendingPageWhite from "./WebPartPages/PendingPageWhite";
import MyFavorite from "./WebPartPages/MyFavorite";
import EditProfilePage from "./WebPartPages/EditProfilePage";
function App() {
  const [checkedMainOption, setCheckedMainOption] = useState(1)
  const [checked, setChecked] = useState(false);
  const foo = () => {
    setChecked(!checked)
  }
  const [checkedFavourite, setCheckedFavourite] = useState(true);
  return (
    <div className={checked ? "body_background_white" : "body_background"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/ViewProfile" element={<ViewProfile checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/FavoriteViewProfile" element={<FavoriteViewProfile checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          {checked ?
            <Route exact path="/PendingPage" element={<PendingPageWhite />} />
            :
            <Route exact path="/PendingPage" element={<PendingPage />} />
          }
          <Route exact path="/MyFavorite" element={<MyFavorite  checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/EditProfilePage" element={<EditProfilePage checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
