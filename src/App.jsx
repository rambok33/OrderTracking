import React from 'react';
import styles from './style';
// import Client from './assets/components/Client';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Trackpanel from './components/Trackpanel';
import OrderFetched from './components/OrderFetched';
import OurClient from './components/OurClient';



const App = () => 
   (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
     <Navbar/>
    </div>
    </div>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <MainPage/>
      </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
          <Stats/>
          <Trackpanel/>
         <OrderFetched/>
         <OurClient/>
          <Footer/>
        
      </div>

      </div>
    
    </div>
  );

export default App