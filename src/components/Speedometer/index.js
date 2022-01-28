import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickBrakeBtn = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateBtn = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="speedometer-img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="speed-status">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="button accelerate-btn"
              onClick={this.onClickAccelerateBtn}
            >
              Accelerate
            </button>

            <button
              type="button"
              className="button break-btn"
              onClick={this.onClickBrakeBtn}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
