import React from 'react';
 
const Link = ({href,className,children}) => {

     const addOnFunction = (event) => {

          // open link in new tab **learn**
     if(event.metaKey || event.ctrlKey){
          return;
     }

     event.preventDefault();// wil prevent loading all resources when url is clicked
window.history.pushState({},'',href);// this will prevent reload of page resources also the page url will change 

//this peice of code will cause the routes to know that URL is changed     
const navEvent = new PopStateEvent('popstate');
window.dispatchEvent(navEvent);
};

return(
<div>
    <a onClick={ addOnFunction } className={className} href={href}>{children} </a>
</div>
);
 }
 export default Link;