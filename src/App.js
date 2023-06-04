import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header'
import ShortenUrl from './Components/ShortenUrl';
import Statistics from './Components/Statistics';
import Dialog from './Components/Dialog';
import ShareContext from './Context';
import './styles.css';

function App() {
    return(
        <main>
            <NavigationBar/>
            <Header/>
            <ShortenUrl/>
            <Statistics/>
            <Dialog/>
        </main>
    )
}

export default ShareContext(App);