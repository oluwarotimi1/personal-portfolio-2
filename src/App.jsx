import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import css from "./styles/App.module.scss";
import { Route, Routes } from "react-router-dom";
import BookASession from "./pages/BookASession/BookASession";
import Homepage from "./pages/Homepage/Homepage";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/book" element={<BookASession />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
};

export default App;
