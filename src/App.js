import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header'
import ShortenUrl from './Components/ShortenUrl';
import Statistics from './Components/Statistics';
import BoostLinksSection from './Components/BoostLinksSection';
import Footer from './Components/Footer'
import MobileMenuDialog from './Components/MobileMenuDialog';
import ShareContext from './Context';
import './styles.css';

function App() {
    return(
        <main>
            <NavigationBar/>
            <Header/>
            <ShortenUrl/>
            <Statistics/>
            <BoostLinksSection/>
            <Footer/>
            <MobileMenuDialog/>
        </main>
    )
}

export default ShareContext(App);