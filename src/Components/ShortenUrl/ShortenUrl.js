import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import useMediaQuery from '../../Hooks/useMediaQuery';

function ShortenUrl() {
    const [url, setUrl] = useState('');
    const mobile = useMediaQuery('(max-width: 620px)')
    const [shortenUrls, setShortenUrls] = useState([]);
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleCopyClick = (e) => {
        e.target.style.backgroundColor = '#3A3054';
        e.target.innerHTML = 'Copied!'
    }

    const handleChange = (e) => {
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
        e.target.setCustomValidity('');
        setUrl(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();
    
        if(!isValid){
            e.target.setCustomValidity(' ');
            errorMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '3px solid #F46363';
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';
        inputRef.current.style.border = '3px solid #F46363';
    }   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '908af369abmsh40faa81094928ecp1b23e0jsne2a440d41836',
                    'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
                },
                body: {
                    url: 'https://www.google.com',
                    alias: 'google'
                }
            };
            
            const response = await fetch('https://url-shortener23.p.rapidapi.com/shorten', options);
            console.log(response);
            const results = await response.text();   
            console.log(results);

        }
        catch(error){
            console.log(error, 'error');
        }
    }

    //i found my api
    useEffect(() => {
        const random = async () => {
            try {
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': '908af369abmsh40faa81094928ecp1b23e0jsne2a440d41836',
                        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                    },
                    body: new URLSearchParams({
                        url: 'https://google.com/'
                    })
                };
                
                const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options);
                console.log(response);
                const results = await response.json();   
                console.log(results);
    
            }
            catch(error){
                console.log(error, 'error');
            }
        }

        random();
    })

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <fieldset className={styles.inputContainer}>
                <input 
                    type='text' 
                    value={url}
                    placeholder='Shorten a link here...'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    className={styles.input}
                    ref={inputRef}
                    required
                    />       
                <div className={styles.errorMessage} ref={errorMessageRef}>
                    Please add a link
                </div>         
            </fieldset>

            <input 
                type='submit' 
                value='Shorten it!' 
                className={styles.submitButton}
                />

            <div className={styles.shortenUrls}>


                <section className={styles.urlContainer}>
                    <h2 className={styles.longUrl}>
                        https://www.frontendmentor.iohtr2/3ad333a/a3d/3ad/3a         
                    </h2>
                    {mobile ? <div className={styles.line}></div> : <></>}
                    <div className={styles.shortUrl_copyButton}>
                        <h2 className={styles.shortUrl}>
                            https://rel.ink/k4lKyk
                        </h2>
                        <button type='button' className={styles.copyButton} onClick={handleCopyClick}>
                            Copy
                        </button>
                    </div>
                </section>   


            </div>
        </form>
    )
}

export default ShortenUrl;