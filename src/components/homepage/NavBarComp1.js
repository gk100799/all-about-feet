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
import "../../index.css"
import SignUp from '../login/SignUp';
import '../../fonts/fonts.css'
import {Navbar, Nav} from 'react-bootstrap'
import { Modal } from 'antd'


class NavBarComp1 extends Component {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    constructor(props) {
      super(props);
      this.state = {
        activeTab : 
          window.location.pathname === '/' ? '' : 
          window.location.pathname === '/men' ? 'men' :
          window.location.pathname === '/women' ? 'women' :
          window.location.pathname === '/about' ? 'about' :
          window.location.pathname === '/about' ? 'contact' : 'none',
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
    });
    
    setTimeout(() => {
            this.setState({
            visible: false,
            confirmLoading: false,
            });
        }, 2000);
    };
    
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
    };

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

        <Modal
          title="Title"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          style={{}}
        >
          <p>{this.state.ModalText}</p>
        </Modal>

        <Navbar onSelect='collapseOnSelect' className="fixedMenu" expand="lg" style={{}} fixed="top" bg="dark" variant="dark" style={{overflowY:'visible'}}>
            <Navbar.Brand ><Link to='/' className="linkTag">CHAPLI SANTE</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
            activeKey={`/${this.state.activeTab}`}
            className="mr-auto"
            >
                <Nav.Link onClick={(e) => this.activeTabChange(e,'id1')} ><Link to='/' className="linkTag">Home</Link></Nav.Link>
                <Nav.Link onClick={(e) => this.activeTabChange(e,'id2')} ><Link to='/men' className="linkTag">Men</Link></Nav.Link>
                <Nav.Link onClick={(e) => this.activeTabChange(e,'id3')} ><Link to='/women' className="linkTag">Women</Link></Nav.Link>
                <Nav.Link onClick={(e) => this.activeTabChange(e,'id4')} ><Link to='/about' className="linkTag">About</Link></Nav.Link>
                <Nav.Link onClick={(e) => this.activeTabChange(e,'id5')} ><Link to='/contact' className="linkTag">Contact</Link></Nav.Link>
            </Nav>
            
            <Nav inline style={{marginRight:'0px'}} defaultActiveKey=''>
                <Nav.Link onClick={this.showModal}>Sign up1</Nav.Link>
                <Nav.Link onClick={this.showModal}>Log in</Nav.Link>  
                <Nav.Link ><Link to='/account' className="linkTag">My account</Link></Nav.Link>
                <Nav.Link ><Link to='/cart' className="linkTag">Cart</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="divSeparator"></div>
    </div>
    
  );
    }
}

export default NavBarComp1;
