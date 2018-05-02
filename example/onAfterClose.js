/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './onAfterClose.css'
import Modal,{Confirm} from '../src/modal'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      show: false,
      title: "This is your confirm title.",
      message: "This is your confirm message.",
      confirmButton: 'confirm',
      cancelButton: 'cancel',
    }
  }

  show = () => {
    this.setState({show: true})
  }

  hidden = () => {
    this.setState({show: false})
  }

  onConfirm = () => {
    this.hidden()
  }

  onCancel = () => {
    this.hidden()
  }

  onAfterClose = () => {
    alert('on after close')
  }

  render () {
    const { title, message, confirmButton, cancelButton} = this.state
    return <div className={css.confirm}>
      <div className={css.handles}>
        <li>
          <button onClick={this.show}>onAfterClose</button>
          <p>The modal close will delay 200ms, then run onAfterClose function.</p>
        </li>
      </div>
      <Modal {...{show: this.state.show, closeDelay: 2000, onAfterClose: this.onAfterClose}}>
        <Confirm onConfirm={this.onConfirm} onCancel={this.onCancel} title={title} message={message} confirmButton={confirmButton} cancelButton={cancelButton} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
