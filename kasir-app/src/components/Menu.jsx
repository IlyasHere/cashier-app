import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../styling/menu.css";

const Menu = ({ menu }) => {
  return (
    <Col md={6} xs={6} className="mb-3">
      <Card className="card">
        <Card.Img
          variant="top"
          src={
            'assets/image/' +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title className="card-title">{menu.nama}</Card.Title>
          <Card.Text>
            <p><strong>kode </strong>: {menu.kode}</p>
          </Card.Text>
          <Card.Text>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(menu.harga)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menu;
