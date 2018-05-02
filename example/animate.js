/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './animate.css'
import Modal,{Alert} from '../src/modal'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      alertShow: false,
      title: "This is your alert title.",
      message: "This is your alert message.",
      confirmButton: 'confirm',
      className: css.fadeOut,
      childClassName: css.child
    }
  }

  alertShow = () => {
    this.setState({
      alertShow: true,
      className: css.fadeIn,
    })
  }

  alertHidden = () => {
    this.setState({alertShow: false})
  }

  onAlertConfirm = () => {
    this.setState({className: css.fadeOut})
    this.alertHidden()
  }


  render () {
    const { title, message, confirmButton, className, childClassName} = this.state

    return <div className={css.alert}>
      <div className={css.handles}>
        <li>
          <button onClick={this.alertShow}>FadeToggle</button>
          <p>Use custom class name add css3 animate. Modal hidden before must use <code>closeDelay</code>.</p>
          <p>In this demo wen modal hidden it's className is fadeOut, Wen it's show it's className is fadeIn.</p>
          <p>You also can give child a class name use css3 animate keywords make a lot of animates.</p>
        </li>
      </div>
      <Modal {...{show: this.state.alertShow, className, closeDelay: 1000}}>
        <Alert onConfirm={this.onAlertConfirm} title={title} message={message} confirmButton={confirmButton} className={childClassName} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
