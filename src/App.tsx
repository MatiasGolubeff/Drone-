import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <div>

      <GlobalStyle />,
      <Header />,
      <Main />,
      <Footer />

      {/* <Routes>

        <Route path='/' element={[


        ]} />
      </Routes> */}




    </div>
  );
}

export default App;
