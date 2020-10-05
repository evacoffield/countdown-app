import React, { Component } from 'react';
import Clock from './components/Clock';
import './App.css';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2020',
      newDeadline: ''
    }
  }

  changeDeadline() {
    //this.setState({deadline: 'November 25, 2020'})
    //console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  state = {  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <div className="App-title">
                Countdown to {this.state.deadline}
              </div>
              <Clock 
              deadline={this.state.deadline}
              />
              <Form inline>
                <FormControl
                  className="Deadline-input"
                  placeholder="new date"
                  //onChange={event => console.log('event', event.target.value)}
                  onChange={event => this.setState({newDeadline: event.target.value})}
                  />
                <Button onClick={()=> this.changeDeadline()}>Submit</Button>
              </Form>
            </Col>
          </Row>
         </Container>
    </div>
    );
  }
}

export default App;