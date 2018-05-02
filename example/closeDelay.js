/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './closeDelay.css'
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
    alert('Your click on confirm button.') // your code
  }

  onCancel = () => {
    this.hidden()
  }

  render () {
    const { title, message, confirmButton, cancelButton} = this.state
    return <div className={css.confirm}>
      <div className={css.handles}>
        <li>
          <button onClick={this.show}>Delay 2000ms</button>
          <p>Wen you close this modal it's will delay 2000ms close. It's often width animate. See animate demo.</p>
        </li>
      </div>
      <Modal {...{show: this.state.show, closeDelay: 2000}}>
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
