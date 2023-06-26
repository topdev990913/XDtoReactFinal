import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './WebPartPages/Home'
import ViewProfile from "./WebPartPages/ViewProfile";
import FavoriteViewProfile from "./WebPartPages/FavoriteViewProfile";
import MyFavorite from "./WebPartPages/MyFavorite";
import EditProfilePage from "./WebPartPages/EditProfilePage";
function App() {
  const [checkedViewProfileGo, setCheckedViewProfileGo] = useState(false)
  const [checkedMainOption, setCheckedMainOption] = useState(1)
  const [checked, setChecked] = useState(false);
  const foo = () => {
    setChecked(!checked)
  }
  const [checkedFavourite, setCheckedFavourite] = useState(true);
  console.log("third", checkedViewProfileGo)
  return (
    <div className={checked ? "body_background_white" : "body_background"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/ViewProfile" element={<ViewProfile checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/FavoriteViewProfile" element={<FavoriteViewProfile checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checkedViewProfileGo={checkedViewProfileGo} setCheckedViewProfileGo={setCheckedViewProfileGo} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />          
          <Route exact path="/MyFavorite" element={<MyFavorite  checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} />} />
          <Route exact path="/EditProfilePage" element={<EditProfilePage checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} checked={checked} setChecked={foo} checkedFavourite={checkedFavourite} setCheckedFavourite={setCheckedFavourite} /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
