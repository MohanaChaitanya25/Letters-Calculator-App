// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onLettersCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="lettersCalculatorApp-bg-container">
        <div className="lettersCalculatorApp-desc">
          <h1 className="lettersCalculatorApp-heading">
            Calculate the Letters you enter
          </h1>
          <label htmlFor="phraseText" className="input-label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            name="Enter the phrase"
            id="phraseText"
            className="text-input"
            placeholder="Enter the phrase"
            onChange={this.onLettersCount}
            // value={lettersCount}
          />

          <p className="no-of-letters">No.of letters: {lettersCount}</p>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="lettersCalculator-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
