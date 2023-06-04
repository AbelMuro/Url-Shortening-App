import React from 'react';
import styles from './styles.module.css';

function BoostLinksSection() {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Boost your links today
            </h1>
            <button className={styles.getStartedButton}>
                Get Started
            </button>   
        </section>
    )
}

export default BoostLinksSection;