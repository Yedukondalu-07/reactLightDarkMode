import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {modeChange: false}

  onChangeMode = () => {
    this.setState(prevState => ({
      modeChange: !prevState.modeChange,
    }))
  }

  render() {
    const {modeChange} = this.state
    const modeClassName = modeChange ? null : 'dark-mode'
    const textChange = modeChange ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChangeMode}>
            {textChange}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
