// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="even-odd-app-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {displayText}</p>
          <div className="button-container">
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
