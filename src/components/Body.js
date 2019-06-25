import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="GreetingText" />
          <Row>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Your Name and Press Enter"
              />
            </Col>
          </Row>
          <Row className="GuideText">
            <Col>* Type your name to display your daily to do list.</Col>
          </Row>
        </Container>{" "}
      </div>
    );
  }
}
export default Body;
