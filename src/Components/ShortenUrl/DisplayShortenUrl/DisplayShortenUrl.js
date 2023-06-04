import React, {useEffect, useRef, useContext} from 'react';
import styles from './styles.module.css';
import { Context } from '../../../Context';

function DisplayShortenUrl({mobile, longUrl, shortUrl}) {
    const {setExpandContainer} = useContext(Context);
    const containerRef = useRef();

    const handleCopyClick = (e) => {
        e.target.style.backgroundColor = '#3A3054';
        e.target.innerHTML = 'Copied!';
        navigator.clipboard.writeText(shortUrl);
    }

    useEffect(() => {
        const handleResize = () => {
            const computedHeight = getComputedStyle(containerRef.current).height;
            setExpandContainer(computedHeight)
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])


    return(
        <section className={styles.urlContainer} ref={containerRef}>
            <h2 className={styles.longUrl}>
                {longUrl}      
            </h2>
            {mobile ? <div className={styles.line}></div> : <></>}
            <div className={styles.shortUrl_copyButton}>
                <h2 className={styles.shortUrl}>
                    {shortUrl}
                </h2>
                <button type='button' className={styles.copyButton} onClick={handleCopyClick}>
                    Copy
                </button>
            </div>
        </section>
    )
}

export default DisplayShortenUrl;