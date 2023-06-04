import React, {useContext, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { Context } from '../../Context';


function Statistics() {
    const {expandContainer} = useContext(Context);
    const containerRef = useRef();

    useEffect(() => {
        containerRef.current.style.paddingTop = expandContainer;
    }, [expandContainer])

    return(
        <section className={styles.container} ref={containerRef}>


            <div className={styles.statistics}>
                <h1 className={styles.title}>
                    Advanced Statistics
                </h1>
                <p className={styles.desc}>
                    Track how your links are performing 
                    across the web with our advanced statistics dashboard.
                </p>
                <div className={styles.statisticBox}>
                    <div className={styles.statisticsIconContainer}>
                        <img src={icons['brandRecognitionIcon']} className={styles.statisticsIcon}/>
                    </div>
                    
                    <h2 className={styles.statisticTitle}>
                        Brand Recognition
                    </h2>
                    <p className={styles.statisticsDesc}>
                        Boost your brand recognition with each click. 
                        Generic links don’t mean a thing. 
                        Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className={styles.statisticBox}>
                    <div className={styles.statisticsIconContainer}>
                        <img src={icons['detailedRecordsIcon']} className={styles.statisticsIcon}/>
                    </div>
                    <h2 className={styles.statisticTitle}>
                        Detailed Records
                    </h2>
                    <p className={styles.statisticsDesc}>
                        Gain insights into who is clicking your links. 
                        Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className={styles.statisticBox}>
                    <div className={styles.statisticsIconContainer}>
                        <img src={icons['fullyCustomizableIcon']} className={styles.statisticsIcon}/>
                    </div>
                    <h2 className={styles.statisticTitle}>
                        Fully Customizable
                    </h2>
                    <p className={styles.statisticsDesc}>
                        Improve brand awareness and content 
                        discoverability through customizable links, 
                        supercharging audience engagement.
                    </p>
                </div>
                <div className={styles.line}></div>
            </div>


        </section>
    )
}

export default Statistics;