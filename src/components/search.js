import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {
// this is set state hook (6,7)
const [term,setTerm]=useState ('programming');
const [results,setResults]=useState ([]);

// use effect has two components first one is function and seconde one is a arraay
useEffect ( () => {   // first argument
     // apirResponse is a self defined func for for handling axios inside async
        //NOTE:check syntax
    const search= async () => {
        const apiResponse = await axios.get ('https://en.wikipedia.org/w/api.php',{   
            params: {// this is includeing parameters in the body of request  
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
                },
    });
    //  at this point axios,get has has brought the api response
    setResults(apiResponse.data.query.search);// now results will have array of all searche results
    };

   
if(term && !results.length){
    search();
}else{
const timeoutid=setTimeout(()=>{// to limit making api req.
    // sarch only one term
        if(term){
            search();
        }
    },500);
    return()=>{
        //cleartimeout and settimeout are in built in javascript
        clearTimeout(timeoutid);
    }
}
 //NOTE: the return stat. will be active every time comp. re-render, 
//  though its loads up in first rendering of cpmonent
},[term]);

const titleAndSummaryFromApi = results.map( (iterator)=>{
    return(
        <div key={iterator.pageid} className="item">
            
            <div className="right floated content">
                <a href={`https://en.wikepedia.org?curid=${iterator.pageid}`}
                 className="ui button"
                 > 
                 Go
                 </a>
            </div>

            <div className="content">
                <div className="header">{iterator.title}</div>
        <span dangerouslySetInnerHTML={{__html:iterator.snippet}}></span> {/* this is to prevent XSS attack */}
            </div>

  </div>
    );
    
});

return (
<div>
    <div className="ui form">
        <div className="field">
            <label>Enter Search Term</label>
            <input 
            value={term} 
            className="input"
             onChange={ e => setTerm(e.target.value)}
             /> {/*handling input via use effect not state */}
        </div>
    </div>
    <div className="ui celled list">{titleAndSummaryFromApi}</div>
    </div>
);
};

export default Search;