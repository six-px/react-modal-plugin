/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './customModal.css'
import Modal from '../src/modal'

class Right extends React.Component {
  render () {
    return <div className={css.right}>
      <span onClick={this.props.close}>close</span>
    </div>
  }
}

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      show: false,
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

  render () {
    return <div className={css.custom}>
      <div className={css.handles}>
        <li>
          <button onClick={this.show}>Show Custom Modal</button>
          <p>Custom modal is very simple, just give modal a child.</p>
          <p>If you want click child outside close modal place use <code>onMask</code> function.</p>
        </li>
      </div>
      <Modal {...{show: this.state.show, onMask: this.onMask}}>
        <Right close={this.hidden} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
