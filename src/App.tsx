import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { Main } from './components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainProduction } from './components/Main-producciones/MainProduction';

function App() {
  return (
    <BrowserRouter>

      <GlobalStyle />
      <Header />

      <Routes>



        <Route path="/" element={
          <>
            <Main />
            <Footer />
          </>

        } />

        <Route path="/producciones" element={
          <>
            <MainProduction />
          </>
        } />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
