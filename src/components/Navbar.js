import Identicon from 'identicon.js';
import React, { Component } from 'react'



  
class Navbar extends Component {
 
  
  render() {
     return (
 <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
       
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
   <ul className="navbar-nav px-3">
   <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
   <small className="text-warning">
   <small id="account"><b>{this.props.account}</b>   </small>
   </small>
   { this.props.account
  ?  <img
   className="ml-2"
   width = '33'
   height='33'
   src={`data:image/png;base64 ,${new Identicon(this.props.account, 30).toString()}`}
   alt=""
   />
:<span></span>
  }
  
   </li>

  </ul>
   
      </nav>
        
    );
  }
}

export default Navbar;
