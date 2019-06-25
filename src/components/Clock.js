import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "C:/Users/hooty/Desktop/sanctuary/src/App.css";
import moment from "moment";

class Clock extends React.Component {
  // state = {
  //   greetings:[
  //     {text:"Good Moring, Welcome to Sancturary on Penn"},
  //     {text:"Good Afternoon, Welcome to Sancturary on Penn"},
  //     {text:"Good Evening, Welcome to Sancturary on Penn"},
  //   ],
  //   showMorningGreeting: false,
  //   showAfternoonGreeting: false,
  //   showEveningGreeting: false
  // }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  currentDate() {
    this.setState({
      date: new Date()
    });
  }
  componentWillMount() {
    setInterval(() => this.currentDate(), 1000);
  }

  render() {
    const today = this.state.currentDate;
    const date = moment(today).format("h:mm ");
    // const hour = moment(today).hour();

    // if ( (hour = 0) && (hour < 12) )
    // {
    //   this.state.showMorningGreeting = true;
    // }
    // else if ((hour >= 12) && (hour < 18))
    // {
    //   this.state.showAfternoonGreeting = true;
    // }
    // else if ((hour >= 18) && (hour > 0)){
    //   this.state.showEveningGreeting = true;
    // }

    //    let greetings ="good day";

    //    if (this.state.showMorningGreeting){
    //      greetings = (
    //        <div>
    //          <Greeting
    //          text={this.state.greetings[0].text}/>
    //           </div>)
    //           }else if(this.state.showAfternoonGreeting){
    //             greetings = (
    //               <div>
    //                 <Greeting
    //                 text={this.state.greetings[1].text}/>
    //                  </div>)}else if(this.state.showEveningGreeting){
    //      greetings = (
    //        <div>
    //          <Greeting
    //          text={this.state.greetings[2].text}/>
    //           </div>)

    return (
      <div>
        <Container>
          <Row className="clock-container clockStyle">
            <Col>
              <em>{date} </em>
            </Col>
            {/* <Col><em>{hour}</em></Col> */}
          </Row>

          <Row>
            <Col className="GreetingText">
              <em>Welcome To The Sanctuary On Penn </em>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Clock;
