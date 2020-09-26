import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cursorDirection: 'right',
      cursorLocationX: 0,
      cursorLocationY: 0,
    }

    this.turnRight = this.turnRight.bind(this);
    this.moveForward = this.moveForward.bind(this);
  }

  turnRight()
  {
    console.log('tr');
    if(this.state.cursorDirection === 'up') this.setState({cursorDirection: 'up'})
    else if(this.state.cursorDirection === 'right') this.setState({cursorDirection: 'right'})
    else if(this.state.cursorDirection === 'down') this.setState({cursorDirection: 'down'})
    else this.setState({cursorDirection: 'left'})
  }

  moveForward()
  {
    console.log('mf');
    if(this.state.cursorDirection === 'up') {
      if(this.state.cursorLocationY === 9) {
        this.turnRight(this.state.cursorDirection);
      } else {
        let temp = this.state.cursorLocationY+1;
        this.setState({cursorLocationY: temp});
      }
    } else  if(this.state.cursorDirection === 'right') {
      if(this.state.cursorLocationX === 9) {
        this.turnRight(this.state.cursorDirection);
      } else {
        let temp = this.state.cursorLocationX+1;
        this.setState({cursorLocationX: temp});
      }
    } else  if(this.state.cursorDirection === 'down') {
      if( this.state.cursorLocationY === 0) {
        this.turnRight(this.state.cursorDirection);
      } else {
        let temp =  this.state.cursorLocationY-1;
        this.setState({cursorLocationY: temp});
      }
    } else {
      if(this.state.cursorLocationX === 0) {
        this.turnRight(this.state.cursorDirection);
      } else {
        let temp = this.state.cursorLocationX-1;
        this.setState({cursorLocationX: temp});
      }
    }
  }
  


  render() {
   return (
      <div className="App">
        <div>
          <button onClick={this.turnRight}>Turn Right</button>
          <button onClick={this.moveForward}>Move Forward</button>
        </div>
        <div>
          <Grid 
            xLocation = {this.state.cursorLocationX}
            yLocation = {this.state.cursorLocationY}
            direction = {this.state.cursorDirection}
          />
        </div>
      </div>
    );
  }
}

export default App;
