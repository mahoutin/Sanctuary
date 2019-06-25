import React from "react";
import { Form, Dropdown, Modal, ButtonGroup, Button } from "react-bootstrap";
import {
  Input,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "C:/Users/hooty/Desktop/sanctuary/src/App.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
}

  render() {
    const{item, handleChange,handleSubmit} = this.props
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Assign Task
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Add Employee
                  </NavLink>
                </NavItem>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body  onSubmit={handleSubmit} >
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="6" id="employee">
                    <Card body>
                      <CardTitle>Task Assigment</CardTitle>
                      <CardText>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control
                              type="text"
                              placeholder="Name of Employee"
                            />
                          </Form.Group>

                          <Form.Group  controlId="exampleForm.ControlInput1">
                            {/* <Form.Control type="text" placeholder="Task" /> */}
                            <input type="text" 
                            className="form-control text-capitalize"
                            placeholder="Task"
                            value={item}
                            onChange={handleChange}/>
                          </Form.Group>
                          <Form.Group>
                            <Dropdown as={ButtonGroup}>
                              <Button variant="success">Choose Priority</Button>
                              <Dropdown.Toggle
                                split
                                variant="success"
                                id="dropdown-split-basic"
                              /> 
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Red
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Orange
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Green
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Form.Group>
                          <Form.Group>
                            <Label for="exampleDate" />
                            <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                            />
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                              as="textarea"
                              rows="3"
                              placeholder="Comments"
                            />
                          </Form.Group>
                        </Form>
                      </CardText>
                      <Button type="submit" className="btn btn-block btn-primary mt-3">Assign</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6" id="employee">
                    <Card body>
                      <CardTitle>Register An Employee</CardTitle>
                      <CardText>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control
                              type="text"
                              placeholder="Name of Employee"
                            />
                          </Form.Group>

                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control
                              type="text"
                              placeholder="Enployee Title"
                            />
                          </Form.Group>
                        </Form>
                      </CardText>
                      <Button>Register</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default AddTodo;
