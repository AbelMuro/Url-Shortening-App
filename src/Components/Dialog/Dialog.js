import React, {useContext, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {Context} from '../../Context';
import useMediaQuery from '../../Hooks/useMediaQuery';

function Dialog () {
    const {openDialog, setOpenDialog} = useContext(Context); 
    const dialog = useRef();
    const mobile = useMediaQuery('(max-width: 620px)')


    useEffect(() => {
        if(!mobile)
            setOpenDialog(false);
    }, [mobile])

    useEffect(() => {
        if(openDialog){
            dialog.current.style.display = 'block';
            setTimeout(() => {
                dialog.current.style.opacity = '1';
            }, 10)   
        }
        else{
            dialog.current.style.opacity = '0';
            setTimeout(() => {
                dialog.current.style.display = '';
            }, 200)
        }
    }, [openDialog])

    return(
        <dialog className={styles.container} ref={dialog}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}>
                    Features
                </li>
                <li className={styles.navLink}>
                    Pricing
                </li>
                <li className={styles.navLink}>
                    Resources
                </li>
                <li className={styles.line}></li>
            </ul>
            <div className={styles.buttons}>
                <button className={styles.loginButton}>
                    Login
                </button>
                <button className={styles.signUpButton}>
                    Sign Up
                </button>
            </div>
        </dialog>
    )
}

export default Dialog;
