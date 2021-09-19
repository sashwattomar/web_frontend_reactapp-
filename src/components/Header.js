import React from "react";
import Link from './Link';
const Header = ()=> {
return (
    <div className="ui secondary pointing menu">
{/* here the way link is used is an example of jsx inside jsx where
 acordin will be refeered as children */}
        <Link href='/' className="item">
            Accordion
        </Link>
        <Link href='/list' className="item">
            Search
        </Link>
        <Link href='/dropdown' className="item">
            Dropdown
        </Link>
        <Link href='/translate' className="item">
            Translate
        </Link>

    </div>
);
}
export default Header;