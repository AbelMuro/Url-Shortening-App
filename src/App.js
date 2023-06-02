import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header'
import Dialog from './Components/Dialog';
import ShareContext from './Context';
import './styles.css';

function App() {
    return(
        <main>
            <NavigationBar/>
            <Header/>
            <Dialog/>
        </main>
    )
}

export default ShareContext(App);