/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './replaceStyle.css'
import Modal,{Alert} from '../src/modal'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      alertShow: false,
      title: "This is your alert title.",
      message: "This is your alert message.",
      confirmButton: 'confirm',
    }
  }

  alertShow = () => {
    this.setState({alertShow: true})
  }

  alertHidden = () => {
    this.setState({alertShow: false})
  }

  onAlertConfirm = () => {
    this.alertHidden()
  }

  render () {
    const { title, message, confirmButton} = this.state
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      zIndex: '1000',
      background: 'rgba(0,0,255,0.5)',
    }
    return <div className={css.alert}>
      <div className={css.handles}>
        <li>
          <button onClick={this.alertShow}>Replace Style</button>
          <p>If you don't like modal default style, you can replace all attribute.</p>
        </li>
      </div>
      <Modal {...{show: this.state.alertShow, style}}>
        <Alert onConfirm={this.onAlertConfirm} title={title} message={message} confirmButton={confirmButton} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
