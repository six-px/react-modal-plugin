/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './complex.css'
import Modal, {Confirm} from '../src/modal'

class Choose extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      confirmShow: false,
      title: "This is your confirm title.",
      message: "This is your confirm message.",
      confirmButton: 'confirm',
      cancelButton: 'cancel',
    }
  }

  confirmShow = () => {
    this.setState({confirmShow: true})
    // wen emit modal open full screen modal outsideClick isCall must false
    this.props.chooseOutsideClickIsCall(false)
  }

  confirmHidden = () => {
    this.setState({confirmShow: false})
    // wen emit modal close full screen modal outsideClick isCall set true
    this.props.chooseOutsideClickIsCall(true)
  }

  render () {
    const { title, message, confirmButton, cancelButton} = this.state
    return <div className={css.choose}>
      <p className={css.textcenter}>
        <button className={css.formbutton} onClick={this.confirmShow}>choose wrong</button>
        <Modal show={this.state.confirmShow}>
          <Confirm onConfirm={this.confirmHidden} onCancel={this.confirmHidden} title={title} message={message} confirmButton={confirmButton} cancelButton={cancelButton} />
        </Modal>
      </p>
      <p>Click choose outside can hidden choose.</p>
    </div>
  }
}

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chooseShow: false,
      isCall: true,
    }
  }

  chooseShow = (e) => {
    this.setState({
      emit:e.target,
      chooseShow: true,
    })
  }

  chooseHidden = () => {
    this.setState({chooseShow: false})
  }

  // wen emit modal open full screen modal outsideClick isCall must false
  // wen emit modal close full screen modal outsideClick isCall set true
  chooseOutsideClickIsCall = (bool) => {
    this.setState({isCall: bool})
  }

  render () {
    const { chooseShow } = this.state

    const chooseModalProps = {
      show: chooseShow,
      emit: {
        target: this.state.emit,
        align: 'left',
        vertical: 'top',
        offset: {
          x: 0,
          y: 34,
        },
      },
      outsideClick: {
        isCall: this.state.isCall,
        callback:this.chooseHidden,
      },
      replaceStyle: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'red',
      },
    }
    return <div className={css.form}>
      <h2 className={css.textcenter}>This is a form</h2>
      <p className={css.textcenter}>
        <button className={css.formbutton} onClick={this.chooseShow}>choose some thing</button>
        {this.state.emit ? <Modal {...chooseModalProps}>
            <Choose chooseOutsideClickIsCall={this.chooseOutsideClickIsCall} />
          </Modal> : null}
      </p>
      <p className={css.textcenter}>
        <button className={`${css.formbutton} ${css.cancel}`} onClick={this.props.close}>close this form</button>
      </p>
    </div>
  }
}

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      formShow: false,
    }
  }

  formShow = () => {
    this.setState({formShow: true})
  }

  formHidden = () => {
    this.setState({formShow: false})
  }

  onFormRequestClose = () => {
    this.formHidden()
  }

  render () {
    return <div className={css.complex}>
      <div className={css.handles}>
        <li>
          <button onClick={this.formShow}>Fill a form</button>
        </li>
      </div>
      <Modal {...{show: this.state.formShow, onMask: this.onFormRequestClose}}>
        <Form close={this.formHidden} />
      </Modal>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
