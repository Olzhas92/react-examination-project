import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import Heroes from "./pages/Heroes";
import Spaceships from "./pages/Spaceships";
import NewMovie from "./pages/NewMovie";

import styles from "./App.module.css";

const App = () => {
  

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="spaceships" element={<Spaceships />} />
          <Route path="adding-movie" element={<NewMovie />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
