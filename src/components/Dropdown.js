import React,{useState,useEffect,useRef} from 'react';
const Dropdown = ({label,options,selected,onsetSelectedchange}) => {
    // for toggling attribute code
    // setOpen will change when user clicks the dropdown menu
    const [open,setOpen]=useState(false);

    const ref=useRef(); {/*ref used here*/}

    //adding manual event listners
   

    useEffect ( ()=>{
// onBodyClick func work is to add event listner to all DOM emeents

        const onBodyClick = (event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

 document.body.addEventListener('click',onBodyClick,{capture:true});

        return () => { //NOTE:this will work when this component is deleted
document.body.removeEventListener('click',onBodyClick,{capture:true,});
};
},
// emty array denotes rendering once i.e.
//  when component rendered first time
[]);

    const renderingOption = options.map ( (iterator)=>{
    if (iterator.value === selected.value) {
return null;
    }
else
    return (
        // event handler  on Click
    <div 
    onClick={()=>onsetSelectedchange(iterator)} 
    key={iterator.value} 
    className="item">
        {iterator.label}
    </div>
        );   
    });
// main returning block
return (
<div ref={ref} className="ui form">  {/*ref used here*/}
    <div className="field">
    <label className="label">{label}</label>
    
    {/* toggling attributes , !open means opposite of open */}
    <div onClick={ ()=>setOpen(!open)} 
    className={`ui selection dropdown ${open ? 'visible active' : ' '}`}
    > 
    <i className="dropdown icon"></i>
    <div className="text">{selected.label}</div>
    <div className={`menu ${open ? 'visible transition':' '}`}> 
    { renderingOption}
            </div>
        </div>
    </div>
</div>
);
};
export default Dropdown;