import React, { Component } from "react";
import { Col, Row, Tab, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";
import "../styling/list.css"; 

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="icon" />;
  if (nama === "Minuman")
    return <FontAwesomeIcon icon={faCoffee} className="icon" />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="icon" />;
  return <FontAwesomeIcon icon={faUtensils} className="icon" />;
};

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    try {
      axios.get(API_URL + "categories").then((res) => {
        const categories = res.data;
        this.setState({ categories });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <h4>Kategori</h4>
        <hr />
        <Tab.Container id="list-group-tabs-example">
          <Row>
            <Col sm={12}>
              <ListGroup>
                {categories &&
                  categories.map((category) => (
                    <ListGroup.Item
                      action
                      href={`#${category.id}`}
                      key={category.id}
                      className="d-flex align-items-center"
                      onClick={() => this.props.changeCategory(category.nama)}
                    >
                      <span className="category-name">{category.nama}</span>
                      <Icon nama={category.nama} />
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}