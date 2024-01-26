import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
