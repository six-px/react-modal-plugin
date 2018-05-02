/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './emitList.css'
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
      },
      listMoreDate: Array.from({length: 100}, (v, i) => ({
        id: i,
        show: false,
      })),
      listCallbackDate: Array.from({length: 100}, (v, i) => ({
        id: i,
        show: false,
      }))
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

  showMoreModal = (e, id) => {
    const obj = {
      target:  e.target,
      align: 'right',
      vertical: 'bottom',
    }
    this.setState(old=>{
      const listMoreDate = old.listMoreDate.slice(0)
      listMoreDate[id].emit = obj
      listMoreDate[id].show = true
      return {
        listMoreDate
      }
    })
  }

  showCallbackModal = (e, id) => {
    const obj = {
      target:  e.target,
      align: 'right',
      vertical: 'bottom',
    }
    this.setState(old=>{
      const listCallbackDate = old.listCallbackDate.slice(0)
      listCallbackDate[id].emit = obj
      listCallbackDate[id].show = true
      return {
        listCallbackDate
      }
    })
  }
  showCallbackModalHidden = (id) => {
    this.setState(old=>{
      const listCallbackDate = old.listCallbackDate.slice(0)
      listCallbackDate[id].show = false
      return {
        listCallbackDate
      }
    })
  }

  getList = () => {
    var list = Array.from({length: 100}, (v, i) => i)
    return list.map((v)=>{
      return <li key={v}>
        <button onClick={this.showModal}>One Has Callback {v}</button>
      </li>
    })
  }

  getListMore = () => {
    const { listMoreDate } = this.state

    return listMoreDate.map((v)=>{
      const modalProps = {
        show: v.show,
        emit: v.emit,
        replaceStyle: {
          width: 'auto',
          height: 'auto',
          backgroundColor: 'blue',
        },
      }

      return <li key={v.id}>
        <button onClick={(e)=>{this.showMoreModal(e, v.id)}}>More No callback {v.id}</button>
        <Modal {...modalProps}>
          <div className={css.child}>
            <h2>One modal in one list</h2>
            <p>This modal not callback.</p>
          </div>
        </Modal>
      </li>
    })
  }

  getListCallback = () => {
    const { listCallbackDate } = this.state

    return listCallbackDate.map((v)=>{
      const modalProps = {
        show: v.show,
        emit: v.emit,
        outsideClick: {
          isCall: true,
          callback:()=>{this.showCallbackModalHidden(v.id)},
        },
        replaceStyle: {
          width: 'auto',
          height: 'auto',
          backgroundColor: 'purple',
        },
      }

      return <li key={v.id}>
        <button onClick={(e)=>{this.showCallbackModal(e, v.id)}}>More Has callback {v.id}</button>
        <Modal {...modalProps}>
          <div className={css.child}>
            <h2>One modal in one list</h2>
            <p>This modal has callback.</p>
          </div>
        </Modal>
      </li>
    })
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
        <ul>
          {this.getList()}
        </ul>
        <ul>
          {this.getListMore()}
        </ul>
        <ul>
          {this.getListCallback()}
        </ul>
      </div>
      {this.state.emit ? <Modal {...modalProps}>
        <div className={css.child}>
          <h2>Only one in body</h2>
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
