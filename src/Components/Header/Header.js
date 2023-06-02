import React from 'react';
import styles from './styles.module.css';
import workingImage from './images';

function Header() {
    return(
        <header className={styles.container}>
            <section className={styles.textBox}>
                <h1 className={styles.title}>
                    More than just shorter links
                </h1>
                <p className={styles.desc}>
                    Build your brand's recognition and get detailed
                    insights on how your links are performing
                </p>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>
            </section>
            <img src={workingImage} className={styles.image} alt='person sitting in front of a computer'/>
        </header>
    )
}

export default Header;
