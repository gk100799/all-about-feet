import React, {useState, Component} from 'react';
import SignIn from '../login/SignIn';
import search from "../../img/icons/search.png"
import man from "../../img/icons/man.png"
import logo from "../../img/logo.png"
import bag from "../../img/icons/bag.png"
import delivery from "../../img/icons/delivery.png"
import voucher from "../../img/icons/voucher.png"
import sales from "../../img/icons/sales.png"
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import "../../index.css"
import SignUp from '../login/SignUp';
import '../../fonts/fonts.css'
import {Navbar, Nav} from 'react-bootstrap'


class NavBarComp extends Component {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    constructor(props) {
      super(props);
      this.state = {
        Lshow : false,
        Sshow : false,
        activeTab : 
          window.location.pathname === '/' ? '' : 
          window.location.pathname === '/men' ? 'men' :
          window.location.pathname === '/women' ? 'women' :
          window.location.pathname === '/about' ? 'about' :
          window.location.pathname === '/about' ? 'contact' : 'none',
      }
      this.handleLClose = this.handleLClose.bind(this);
      this.handleLShow = this.handleLShow.bind(this);
      this.handleSClose = this.handleSClose.bind(this);
      this.handleSShow = this.handleSShow.bind(this);
      this.toLogin = this.toLogin.bind(this);
      this.toSignup = this.toSignup.bind(this);
    }

    handleLClose = () => this.setState({ Lshow:false });
    handleLShow = () => this.setState({ Lshow:true });

    handleSClose = () => this.setState({ Sshow:false });
    handleSShow = () => this.setState({ Sshow:true });
    
    toLogin = () => {
      this.setState({ Sshow:false });
      this.setState({ Lshow:true });
    }

    toSignup = () => {
      this.setState({ Lshow:false });
      this.setState({ Sshow:true });
    }

    activeTabChange = (event,id) => {
      console.log(id);
      switch(id) {
        case 'id1' : this.setState({ activeTab:'home' }); break;
        case 'id2': this.setState({ menActive:'men' }); break;
        case 'id3': this.setState({ womenActive:'women' }); break;
        case 'id4': this.setState({ aboutActive:'about' }); break;
        case 'id5': this.setState({ contactActive:'contact' }); break;
        default: break;
      }
    }


  render() {
    return (
      <div>
        <div >
          <Modal style={{overflowY:'hidden'}} id="modal-signup" show={this.state.Sshow} onHide={this.handleSClose} centered >
            <Modal.Header closeButton>
              <Modal.Body >
                <SignUp toLogin={this.toLogin} /> 
              </Modal.Body>
            </Modal.Header>
          </Modal>
        </div>
        <div>
          <Modal style={{overflowY:'hidden'}} id="modal-signin" show={this.state.Lshow} onHide={this.handleLClose} centered >
            <Modal.Header closeButton>
              <Modal.Body >
                <SignIn toSignup={this.toSignup} />
              </Modal.Body>
            </Modal.Header>
          </Modal>
        </div>

      <Navbar className="fixedMenu" collapseOnSelect expand="lg" style={{height:'86px !important'}} fixed="top" bg="dark" variant="dark" style={{overflowY:'visible'}}>
        <Navbar.Brand href="/">CHAPLI </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          activeKey={`/${this.state.activeTab}`}
          className="mr-auto"
        >
          <Nav.Link onClick={(e) => this.activeTabChange(e,'id1')} href="/">Home</Nav.Link>
          <Nav.Link onClick={(e) => this.activeTabChange(e,'id2')} href="/men">Men</Nav.Link>
          <Nav.Link onClick={(e) => this.activeTabChange(e,'id3')} href="/women">Women</Nav.Link>
          <Nav.Link onClick={(e) => this.activeTabChange(e,'id4')} href="/about">About</Nav.Link>
          <Nav.Link onClick={(e) => this.activeTabChange(e,'id5')} href="/contact">Contact</Nav.Link>
        </Nav>
        
        <Nav inline style={{marginRight:'0px'}} defaultActiveKey=''>
          <Nav.Item>
            <Nav.Link onClick={this.handleSShow}>Sign up</Nav.Link>
          </Nav.Item>
          <Nav.Link onClick={this.handleLShow}>Log in</Nav.Link>  
          <Nav.Link href="/account">My account</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="divSeparator"></div>
      <button id="id2" className={this.state.menActive ? "active" :'none' } onClick={this.handleLShow}>Men</button>

    {/* <!-- Header Section Begin -->
    <header className="header-section" style={{position:'fixed',top:'0', paddingTop:'10px',width:'100%',paddingRight:'0px',marginRight:'auto',height:'60px', zIndex:'1', backgroundColor:'#dadada',overflowY: 'hidden'}}>
        <div className="container-fluid">
            <div className="inner-header">
                <div className="logo">
                    <a href="/"><img src={logo} alt=""></img></a>
                </div>
                <div className="header-right">
                    <img src={search} alt="" className="search-trigger"/>
                    <img src={man} alt=""/>
                    <a href="/cart">
                        <img src={bag} alt=""/>
                        <span style={{border:'1px solid rgb(167, 164, 164)', backgroundColor:'#dadada'}}>2</span>
                    </a>
                </div>
                <div className="user-access ">
                  <Link onClick={this.handleSShow} >
                        <a>Register</a>
                  </Link>
                  <Link onClick={this.handleLShow} >
                      <a className="in">Sign in</a>
                  </Link>
                </div>
                <nav className="main-menu mobile-menu">
                    <ul>
                        <Link to='/'>
                        <li><a id ="id1" className={this.state.homeActive ? "active" :'none' } onClick={(e) => this.activeTabChange(e,'id1')}>Home</a></li>
                        </Link>
                        <Link to='/men'>
                          <li><a id="id2" className={this.state.menActive ? "active" :'none' } onClick={(e) => this.activeTabChange(e,'id2')}>Men</a>
                              <ul className="sub-menu">
                                  <li><a href="product-page.html">Product Page</a></li>
                                  <li><a href="shopping-cart.html">Shopping Card</a></li>
                                  <li><a href="check-out.html">Check out</a></li>
                              </ul>
                          </li>
                        </Link>
                        <Link to='/women'>
                          <li><a id="id3" className={this.state.womenActive ? "active" :'none' } onClick={(e) => this.activeTabChange(e,'id3')}>Women</a></li>
                        </Link>
                        <Link to='/about'>
                          <li><a id="id4" className={this.state.aboutActive ? "active" :'none' } onClick={(e) => this.activeTabChange(e,'id4')}>About</a></li>
                        </Link>
                        <Link to='/contact'>
                          <li><a id="id5" className={this.state.contactActive ? "active" :'none' } onClick={(e) => this.activeTabChange(e,'id5')}>Contact</a></li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    {/* <!-- Header Info Begin --> 
    <div className="header-info" style={{marginTop:'60px'}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="header-item">
                        <img src={delivery} alt=""/>
                        <p style={{cursor: 'default'}}>Free shipping on orders over $30 in USA</p>
                    </div>
                </div>
                <div className="col-md-4 text-left text-lg-center">
                    <div className="header-item">
                        <img src={voucher} alt=""/>
                        <p style={{cursor: 'default'}}>20% Student Discount</p>
                    </div>
                </div>
                <div className="col-md-4 text-left text-xl-right">
                    <div className="header-item">
                    <img src={sales} alt=""/>
                    <p style={{cursor: 'default'}}>30% off on dresses. Use code: 30OFF</p>
                </div>
                </div>
            </div>
        </div>
    </div>
     <!-- Header Info End -->
    <!-- Header End -->  
    */}
    </div>
    
  );
    }
}

export default NavBarComp;
