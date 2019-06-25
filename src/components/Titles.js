import React from "react";
import Image from "react-bootstrap/Image";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "C:/Users/hooty/Desktop/sanctuary/src/App.css";

class Titles extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col lg={12}>
            <Image className="Titlelogo" src="/images/sanct_png.png" />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Titles;
