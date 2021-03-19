import React from 'react';
const Sidenav = (props) => {
    return ( 
        <React.Fragment>
            <ul className="list-unstyled m-0">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li className="show-mobile parent"><a href="#" data-related="title_1">Categories</a></li>
          <li><a href="#">Discounts</a></li>
          <li><a href="#">Bogo</a></li>
          <li><a href="#">Check My Voucher Status</a></li>
          <li><a href="#">Resend My Voucher</a></li>
          <li><a href="#">My Transactions</a></li>
          <li><a href="#">Customer Care</a></li>
        </ul>
        
        </React.Fragment>
     );
}
 
export default Sidenav;