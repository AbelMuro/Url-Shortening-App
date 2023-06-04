import React from 'react';
import styles from './styles.module.css';
import logo from './icons';

function Footer() {
    return(
        <footer className={styles.container}>
            <section className={styles.content}>
                <img src={logo} className={styles.logo}/>

                <div className={styles.footerLinks}>
                    <h3 className={styles.columnTitle}>
                        Features
                    </h3>
                    <h3 className={styles.columnTitle}>
                        Resources
                    </h3>
                    <h3 className={styles.columnTitle}>
                        Company
                    </h3>
                    <a className={styles.link}>
                        Link Shortening
                    </a>
                    <a className={styles.link}>
                        Blog
                    </a>
                    <a className={styles.link}>
                        About
                    </a>
                    <a className={styles.link}>
                        Branded Links
                    </a>
                    <a className={styles.link}>
                         Developers
                    </a>
                    <a className={styles.link}>
                        Our Team
                    </a>
                    <a className={styles.link}>
                        Analytics
                    </a>
                    <a className={styles.link}>
                        Support
                    </a>
                    <a className={styles.link}>
                        Careers
                    </a>
                    <a className={styles.link}>
                        Contact
                    </a>
                </div>
                <ul className={styles.socialLinks}>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                </ul>

            </section>
        </footer>
    )
}

export default Footer;