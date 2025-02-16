import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbarcomponent, List, Hasil, Menu } from "./components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {API_URL} from './utils/constant'
import axios from 'axios'
import React, { Component } from 'react'
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus:[],
       categoriYangDipilih: 'Makanan'
    }
  }

  componentDidMount(){
    try {
      axios.get(API_URL + 'products?category.nama=' + this.state.categoriYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({menus});
      })
    } catch(error) {
      console.log(error)
    }
   } 

   changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })
    axios.get(API_URL + 'products?category.nama=' + value)
    .then(res => {
      const menus = res.data;
      this.setState({menus});
      }).catch(error => {
        console.log(error)
      })
    }



  render() {
    const {menus,categoriYangDipilih} = this.state
    return (
      <div>
        <Navbarcomponent />
        <div className="content">
          <Container fluid>
            <Row>
              <Col md={4}>
                <List changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
              </Col>
              <Col md={4}>
                <h4>Daftar Produk</h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menu key={menu.id} menu={menu} />
                  ))}
                </Row>
              </Col>
              <Col md={4}>
                <Hasil />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}



