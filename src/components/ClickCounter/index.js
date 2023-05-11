// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <p className="paragraph-1">The Button has been Clicked {count} times</p>
        <p className="paragraph-2">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
