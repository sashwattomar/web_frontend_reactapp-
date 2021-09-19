import React, {useState,useEffect} from 'react';
import axios from 'axios';
const Convert = ({language,text}) =>{
const [translated,setTranslated]=useState('');
const [debouncedText,setDebouncedText]=useState('text');
        //******** using two use effect
useEffect(()=>{ //RELATE WITH LIFECYCE METHODS OR CALLED WHEN CERTAIN TASK HAPPEN EHCH IS DIFFERENT FROM EVENT HANDLING 
    
    // after 500ms set debouncedText to the text which user had inputed
    const timerId= setTimeout(()=>{
setDebouncedText(text);
    },500);

 // if user inputs before 500ms text will be changed causing rerendering and 
//  thus return on useeffect is envoked thus can cancell timer here   
return () => {
    clearTimeout(timerId);
}
},[text]);
//NEED TO MAKE API REQ. EVERY time text or language is changed hence 
// useEffect in use
useEffect( ()=>{
    const doTranslation = async () => {
        const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',
        {},// since this api dosent allow making request inside body 
        // but through querry string parameters hence a third argument 
        {
            params : {
                q:debouncedText,//***making req using debounced text****
                target:language.value,
                key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            }
        })
    setTranslated(data.data.translations[0].translatedText);
    }
doTranslation();// calling this function
},[language,debouncedText]);// MAKE API REQ. EVERY time text or language is changed
return (
<div >
<h1 className='ui header'>{translated}</h1>
</div>);
};
export default Convert;
