import React from "react";
import Titles from "./components/Titles";
import Body from "./components/Body";
import Clock from "./components/Clock";
import AddTodo from "./components/AddTodo";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import TodoDisplay from './components/TodoDisplay';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid'

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }
  state = {
    items: [],
    id: uuid(),
    item:"",
    editItem:false
  };

  handleChange = e =>{
    this.setState({
      item: e.target.value
    });
  };
handleSubmit = e =>{
  e.preventDefault();

  const newItem ={
    id:this.state.id,
    item:this.state.item
  }

  console.log(newItem);
  const updatedItems = [...this.state.items,newItem];

  this.setState({
    items:updatedItems,
    item:'',
    id:uuid(),
    editItem:false
  })
}
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div>
        <Navbar variant="dark">
          <Navbar.Brand href="#home" className="Navbar-Brand">
            <ButtonToolbar>
              <Button
                onClick={() => this.setState({ modalShow: true })}
                id="myButton"
                variant="outline-light"
                size="lg"
              >
                <i class="fas fa-plus-circle">
                  <span></span>
                </i>
              </Button>
            </ButtonToolbar>
          </Navbar.Brand>
        </Navbar>

        <AddTodo show={this.state.modalShow} onHide={modalClose}
        item={this.state.item}
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}/>
        <Titles />
        <Clock />
        <Body />
        <TodoDisplay />
      </div>
    );
  }
}

export default App;
