import React,{useState} from 'react';
import Accordion from  './components/Accordion';
import Search from './components/search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';
const items = [
    {
        title:'What is react ?',
        content:'react is a front end javascript framework',
    },
    {
        title:'Why use react?',
        content :'React is a favourite JS library among engineers',
    },
    {
        title:'How do you use react?',
        content:'You use react by creating component',
    },
];
const option =[ // array of objects, will be passed as props allowing
                //  reusability of Dropdown with different set of options 
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Shade Blue',
        value:'blue'
    }
];

const App = ()=> {
       // using state to know what option is currently selcted
         const [selected,setSelected] = useState(option[0]);
        return (
            <div>
                <Header />

<Route path="/">
 < Accordion items={items} />
 </Route>
 
 <Route path="/list">
 < Search />
 </Route>

 <Route path="/dropdown">
  <Dropdown
  label="Select a color"
  options={option}
  selected={selected}
  onsetSelectedchange={setSelected}
/>
 </Route>

 <Route path="/translate">
 < Translate />
 </Route>

            </div>
 );
  
}
export default App;



// //*********************important*******************
// {/* //  const [showDropDown,setShowDropDown] = useState(true);  */}
// {/* //             {/* <button onClick={()=>{setShowDropDown(!showDropDown)}}> */}
// {/* //                 Toggle drop down */}
// {/* //                 </button> */} */}

// {/*//  using terniary operation */}           
//                     {/* { showDropDown ? <Dropdown
// //                     selected={selected}
// //                     onsetSelectedchange={setSelected}// if user switches dropdown option
// //                      options={option} /> : null
// //                      }  */}