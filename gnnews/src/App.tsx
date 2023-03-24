import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NewsFeed from "./components/Content/NewsFeed";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <NewsFeed />
          </>
        }
      />
    </Routes>
  );
}

export default App;
