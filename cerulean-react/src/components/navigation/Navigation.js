import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Button,
  Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lapa Eats</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/recipes">Recipes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
            </Nav>
            <InputGroup>
              <Input placeholder="Search"/>
              <InputGroupAddon addonType="append">
                <Button outline color="info">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
