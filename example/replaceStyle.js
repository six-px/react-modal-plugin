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
    const replaceStyle = {
      background: 'rgba(255, 0, 0, 0.5)',
      border: '10px solid red',
      width: 'calc(100% - 20px)',
      height: 'calc(100% - 20px)',
    }
    return <div className={css.alert}>
      <div className={css.handles}>
        <li>
          <button onClick={this.alertShow}>Replace Style</button>
          <p>If you don't like modal default style, you can replace some attribute.</p>
        </li>
      </div>
      <Modal {...{show: this.state.alertShow, replaceStyle}}>
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
