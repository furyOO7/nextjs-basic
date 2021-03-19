import React from 'react';
const Topnav = (props) => {
    return (  
        <div className="subMenu" id="categories">
          <div className="text-right nav-back"><span>Categories</span></div>
          <ul className="list-unstyled m-0">
            <li><a href="category.html">Apparel &amp; Accessories</a></li>
            <li><a href="category.html">Food &amp; Beverage</a></li>
            <li><a href="category.html">Grocery &amp; Home Needs</a></li>
            <li><a href="category.html">Mobile &amp; Electronics</a></li>
            <li><a href="category.html">Health &amp; Wellness</a></li>
            <li><a href="category.html">e-Com &amp; Online</a></li>
            <li><a href="category.html">Entertainment &amp; Magazines</a></li>
            <li><a href="category.html">Cabs &amp; Travel</a></li>
            <li><a href="category.html">All Brands</a></li>
          </ul>
        </div>
    );
}
 
export default Topnav;