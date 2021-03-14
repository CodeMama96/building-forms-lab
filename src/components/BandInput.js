// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.text)
    this.setState({
      text: '',
    })
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
    	  
          <input type="text" 
          onChange={(event) => this.handleChange(event)}
          value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}



export default BandInput
