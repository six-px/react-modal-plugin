/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './emitModal.css'
import Modal from '../src/modal'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      show: false,
      align: 'center',
      vertical: 'top',
      offset: {
        x: 0,
        y: 34,
      }
    }
  }

  show = () => {
    this.setState({show: true})
  }

  hidden = () => {
    this.setState({show: false})
  }

  showModal = (e)=>{
    this.setState({
      emit:e.target,
      align: 'right',
      offset: {x: 0, y: 34,},
    })
    this.show()
  }

  showModalRightTop = (e) => {
    this.setState({
      emit:e.target,
      align: 'right',
      offset: {x: 0, y: 0,},
    })
    this.show()
  }


  render () {

    const { show , align, vertical, offset} = this.state

    const modalProps = {
      show,
      emit: {
        target: this.state.emit,
        align,
        vertical,
        offset,
      },
      outsideClick: {
        isCall: true,
        callback:this.hidden,
      },
      replaceStyle: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'red',
      },
    }

    return <div className={css.emitmodal}>
      <div className={css.handles}>
        <li>
          <button onClick={this.showModal}>Show Emit Modal</button>
          <p>Emit modal is not full screen modal. You can set <code>emit</code> object <code>align vertical offset</code> it will adjust for you click element.</p>
          <p>Wen you click outside of this modal <code>outsideClick</code> is must exits. <code>outsideClick callback</code> function will execute.</p>
          <p><code>outsideClick isCall</code> default value is <code>true</code>, So it's can leave out.</p>
        </li>
        <li>
          <button onClick={this.showModalRightTop}>Show Emit Right Top</button>
        </li>
      </div>
      {this.state.emit ? <Modal {...modalProps}>
        <div className={css.child}>
          <h2>emit modal</h2>
          <p>You can click outside of this red black.</p>
        </div>
      </Modal> : null}
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
