import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import SideBar from './Pages/SideBar/SideBar';
import Footer from './Pages/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Main />
      <SideBar />
      <Footer />
    </div>

  </React.StrictMode>
);


