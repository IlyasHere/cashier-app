import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbarcomponent, List, Hasil } from "./components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {API_URL} from './utils/constant'
import axios from 'axios'



import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus:[],
    }
  }

  componentDidMount(){
    try {
      axios.get(API_URL + 'products')
      .then(res => {
        const menus = res.data;
        this.setState({menus});
      })
    } catch(error) {
      console.log(error)
    }
   }

  render() {

    const {menus} = this.state
    return (
      <div className="App">
      <Navbarcomponent />
      <div className="mt-3">
      <Container fluid>
        <Row>
          <Col md={4}>
            <List />
          </Col>
          <Col md={4}>
            <h4>Daftar Produk</h4>
            <hr />
            <Row>
            {menus && menus.map((menu) => (
              <Col key={menu.id}>
                <img src={API_URL + 'image/' + menu.gambar} alt={menu.nama} className="img-fluid" />
                <p>{menu.nama}</p>
                <p>Rp. {menu.harga}</p>
                </Col>
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



