import React,{useState} from 'react';
import DropDown from './Dropdown';
import Convert from './Convert';

 const options =[
     {
         label:'Africaans',
         value:'af'
     },
     {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
 ];
 const Translate = () =>{
 const [language,setLanguage]= useState(options[0]); //sate to maintain current selected language
 const [text,setText]= useState(' '); // state for maintaining input 
 return (
         <div>
             <div className='ui form'>
                 <div className='field'>
                     <label>Enter text </label>
                 <input value={text} onChange={(e)=>{setText(e.target.value)}} />
                 </div>
             </div>
            {/* using Dropdown component again */}
             <DropDown 
             label="Select Language"
             selected={language} 
             onsetSelectedchange={setLanguage}
              options={options} />
         <hr /> {/*horizontal space to create seperation  */}
<h3 className='ui header'>Output</h3>
       <Convert language={language} text={text} />
         </div>
     );

 };
 export default Translate;
