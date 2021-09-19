import { useEffect,useState } from "react";
const Route = ({path,children}) => {
// this state is just for rerendering the page when the URL changed
    const[currentpath,setCurrentPath]=useState(window.location.pathname);

// to listen the pop state event popped from linked comp. on URL change
useEffect( ()=>{
const onLocationChange=()=>{
    setCurrentPath(window.location.pathname) // eg: '/list'
};
window.addEventListener('popstate',onLocationChange);

// use effect return a function 
// need: if we need to remove this component this will come to use
return () => {
window.removeEventListener('popstate',onLocationChange);
}
     },[]);

    if(currentpath === path){
        return <div> {children}</ div>;
    }
    else 
    return null;
}
export default Route;