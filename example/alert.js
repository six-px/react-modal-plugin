/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './alert.css'
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

  resetInfo = () => {
    this.setState({
      title: "This is your alert title.",
      message: "This is your alert message.",
      confirmButton: 'confirm',
    })
  }

  alertShow = () => {
    this.setState({alertShow: true})
  }

  alertHidden = () => {
    this.setState({alertShow: false})
  }

  onAlertConfirm = () => {
    this.alertHidden()
    alert('Your click on confirm button.') // your code
    this.resetInfo() // wen you delete title or message this function can reset title message ... info.
  }

  deleteTitle = () => {
    this.setState({title: null})
  }

  deleteMessage = () => {
    this.setState({message: undefined})
  }

  deleteButton = () => {
    this.setState({confirmButton: undefined})
  }

  customStyle = () => {
    this.setState({customClass: css.myalert})
  }

  render () {
    const { title, message, confirmButton, customClass} = this.state
    return <div className={css.alert}>
      <div className={css.handles}>
        <li>
          <button onClick={this.alertShow}>Show Alert</button>
          <p>Default alert demo. <code>onConfirm</code> function is must.</p>
        </li>
        <li>
          <button onClick={()=>{this.deleteTitle(); this.alertShow()}}>Delete Title</button>
          <p>No title alert demo. When <code>title</code> is <code>null</code> or <code>undefined</code>.</p>
        </li>
        <li>
          <button onClick={()=>{this.deleteMessage(); this.alertShow()}}>Delete Message</button>
          <p>No message alert demo. When <code>message</code> is <code>null</code> or <code>undefined</code>.</p>
        </li>
        <li>
          <button onClick={()=>{this.deleteButton(); this.alertShow()}}>Delete Button</button>
          <p>Alert <code>confirmButton</code> default value is <code>confirm</code>. The <code>confirmButton</code> value is delete but it's also equal <code>confirm</code>.</p>
        </li>
        <li>
          <button onClick={()=>{this.customStyle(); this.alertShow()}}>Custom className</button>
          <p>Custom alert style. Set a <code>className</code> for alert.</p>
        </li>
      </div>
      <Modal {...{show: this.state.alertShow}}>
        <Alert onConfirm={this.onAlertConfirm} title={title} message={message} confirmButton={confirmButton} className={customClass} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
