import React, {useContext} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { Context } from '../../Context';


//implement a dialog option when the user clicks on the hamburger icon
function NavigationBar() {
    const mobile = useMediaQuery('(max-width: 620px)');
    const {openDialog, setOpenDialog} = useContext(Context);

    const handleMobileIcon = () => {
        setOpenDialog(!openDialog);
    }

    return(
        mobile ?  
            <nav className={styles.mobileContainer}>
                <img src={icons['logo']} className={styles.mobileLogo} alt='Shortly'/>    
                <img src={icons['hamburgerIcon']} className={styles.hamburger} alt='hamburger menu icon' onClick={handleMobileIcon}/>
            </nav> 
            : 
            <nav className={styles.container}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <img src={icons['logo']} className={styles.logo} alt='Shortly'/>                       
                    </li>
                    <li className={styles.navLink}>
                        <a>
                            Features
                        </a>                  
                    </li>
                    <li className={styles.navLink}>
                        <a>
                            Pricing
                        </a>                       
                    </li>
                    <li className={styles.navLink}>
                        <a>
                            Resources
                        </a>                  
                    </li>
                </ul>
                <div className={styles.buttons}>
                    <button className={styles.loginButton}>
                        Login
                    </button>
                    <button className={styles.signUpButton}>
                        Sign Up
                    </button>
                </div>
            </nav> 
    )
}

export default NavigationBar;