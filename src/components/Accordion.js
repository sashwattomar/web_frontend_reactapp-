import React, {useState} from 'react';
//functional based component
const Accordion = ({items})=> {
const [indexValue,setIndexValue]=useState(null);
  //helper function
    const onTitleClick = (index) => {
        setIndexValue(index);
    }
//**************treating arrays with objects as data************* 
    const allObjects = items.map( (iterator,index)=>{

//for dropdown functionality
        const dropDownChoice = indexValue === index ? 'active':'';
        
        return (
        <React.Fragment key={iterator.title}>
        <div className={"title"+ dropDownChoice} onClick={()=> onTitleClick(index)}>
        <i className="dropdown icon"> </i>
        {iterator.title}
        </div>
        {/* compare syntax of line 19 & line 14 */}
<div className={"content" + dropDownChoice}>
<p>{iterator.content}</p>    
</div>
</React.Fragment>
        );
    
});

return <div className='ui styled accordion'> {allObjects} </div>
};
export default Accordion;