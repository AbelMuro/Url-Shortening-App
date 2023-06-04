import React, {useState, useRef} from 'react';
import styles from './styles.module.css';
import useMediaQuery from '../../Hooks/useMediaQuery';
import CircularProgress from '@mui/material/CircularProgress';
import DisplayShortenUrl from './DisplayShortenUrl';

function ShortenUrl() {
    const [url, setUrl] = useState('');
    const mobile = useMediaQuery('(max-width: 620px)');
    const [longUrl , setLongUrl] = useState('');
    const [shortenUrl, setShortenUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const errorMessageRef = useRef();
    const invalidMessageRef = useRef();
    const inputRef = useRef();

    const handleChange = (e) => {
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
        invalidMessageRef.current.style.display = '';
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
            setLoading(true);
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '908af369abmsh40faa81094928ecp1b23e0jsne2a440d41836',
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    url: url
                })
            };
            
            const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options);
            const results = await response.json();   
            setLongUrl(url);
            if(results.error){
                invalidMessageRef.current.style.display = 'block';
                inputRef.current.style.border = '3px solid #F46363';
            }  
            else
                setShortenUrl(results); 
            setLoading(false)
        }
        catch(error){
            setLoading(false);
            invalidMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '3px solid #F46363';
            inputContainer.current.style.marginBottom = mobile ? '10px' : '';
        }
    }


    return(
        <form className={styles.container} onSubmit={handleSubmit}>
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

            <button className={styles.submitButton}>
                {loading ? <CircularProgress/> : 'Shorten it!'}
            </button>

            <div className={styles.errorMessage} ref={errorMessageRef}>
                Please add a link
            </div> 

            <div className={styles.errorMessage} ref={invalidMessageRef}>
                Invalid Url
            </div> 

            <div className={styles.shortenUrls}>
                {shortenUrl ? 
                   <DisplayShortenUrl mobile={mobile} longUrl={longUrl} shortUrl={shortenUrl.result_url}/>   
                   : <></> }
            </div>
        </form>
    )
}

export default ShortenUrl;