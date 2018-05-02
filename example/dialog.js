/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './dialog.css'
import Modal,{Dialog} from '../src/modal'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      show: false,
      size: undefined,
      width: undefined,
      height: undefined,
      style: undefined,
      className: undefined,
    }
  }

  show = () => {
    this.setState({show: true})
  }

  hidden = () => {
    this.setState({show: false})
  }

  onMask = () => {
    this.hidden()
  }

  showDefault = () => {
    this.setState({
      size: undefined,
      width: undefined,
      height: undefined,
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showSmall = () => {
    this.setState({
      size: 'small',
      width: undefined,
      height: undefined,
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showLarge = () => {
    this.setState({
      size: 'large',
      width: undefined,
      height: undefined,
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showFull = () => {
    this.setState({
      size: 'full',
      width: undefined,
      height: undefined,
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showCustomSize = () => {
    this.setState({
      size: undefined,
      width: '300px',
      height: '600px',
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showCustomSizeAuto = () => {
    this.setState({
      size: undefined,
      width: '80%',
      height: 'auto',
      style: undefined,
      className: undefined,
    })
    this.show()
  }

  showCustomStyle = () => {
    this.setState({
      size: undefined,
      width: undefined,
      height: undefined,
      style: {
        backgroundColor: 'red',
      },
      className: undefined,
    })
    this.show()
  }

  showFullStyle = () => {
    this.setState({
      size: 'full',
      width: undefined,
      height: undefined,
      style: {
        top: '50%',
        backgroundColor: 'red',
      },
      className: undefined,
    })
    this.show()
  }

  setClassName = () => {
    this.setState({
      size: undefined,
      width: undefined,
      height: undefined,
      style: undefined,
      className: css.slid,
    })
    this.show()
  }

  render () {
    const { show, size, width, height, style, className} = this.state
    return <div className={css.dialog}>
      <div className={css.handles}>
        <li>
          <button onClick={this.showDefault}>Default Dialog</button>
          <p>Default dialog size is medium width is 600px height is 450px.</p>
        </li>
        <li>
          <button onClick={this.showSmall}>Small Dialog</button>
          <p>Small dialog width is 400px height is 300px.</p>
        </li>
        <li>
          <button onClick={this.showLarge}>Large Dialog</button>
          <p>Large dialog width is 800px height is 600px.</p>
        </li>
        <li>
          <button onClick={this.showFull}>Full Screen Dialog</button>
          <p>Full screen dialog set position top right bottom left 20px.</p>
        </li>
        <li>
          <button onClick={this.showCustomSize}>Custom Size</button>
          <p>In this demo width is 300px height is 600px.</p>
        </li>
        <li>
          <button onClick={this.showCustomSizeAuto}>Custom Size Auto</button>
          <p>In this demo width is 80% height is auto.</p>
        </li>
        <li>
          <button onClick={this.showCustomStyle}>Custom Style</button>
          <p>In this demo has red background.</p>
        </li>
        <li>
          <button onClick={this.showFullStyle}>Full and Custom</button>
          <p>In this demo use full screen and custom style.</p>
        </li>
        <li>
          <button onClick={this.setClassName}>Set ClassName</button>
          <p>In this demo via set class name provide a animate.</p>
        </li>
      </div>
      <Modal {...{show, onMask: this.onMask}}>
        <Dialog {...{size, width, height, style, className}}>
          <div>
            Your Html is here.
          </div>
        </Dialog>
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
