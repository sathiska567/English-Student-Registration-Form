import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
