# Introduce
* react-modal-plugin just provide one div, this div is modal.
* In this div(modal) html is modal's child.
* react-modal-plugin provide some child(alert,comfirm,dialog).
* You can custom child , class name , style for modal.

# Example and demo
* Place download react-modal-plugin open `demo/index.html` . Example and demo are one on one.

# Doc

## Alert
Alert is modal's child. Example see `example/alert.js`. Demo open `demo/alert.js` in browser.
```Javascript
import Modal,{Alert} from 'react-modal-plugin'

<Modal show={true}>
  <Alert
  onConfirm={()=>{alert('You click confirm button!')}}
  title="title"
  message="message"
  confirmButton="confirm"
  className="custom-class-name"
  />
</Modal>
```
>Alert props:
>* title value is text,it's alert title,if title value is undefined it's don't show in alert.
>* message value is text,it's alert message,if message value is undefined it's don't show in alert.
>* confirmButton value is text,it's default value is `confirm`.
>* clssName value is class name,you can custom alert style use className.
>* onConfirm value is function,wen confirm button is click modal will call onConfirm function, so you can add you code in onConfirm, don't forget set modal props show value is false.

## Confirm
Confirm is modal's child. Example see `example/confirm.js`. Demo open `demo/confirm.js` in browser.
```Javascript
import Modal,{Confirm} from 'react-modal-plugin'

<Modal show={true}>
  <Confirm
  onConfirm={()=>{alert('You click confirm button.')}}
  onCancel={()=>{alert('You click cancel button.')}}
  title="title"
  message="message"
  confirmButton="confirm"
  cancelButton="cancel"
  className="custom-class-name"
  />
</Modal>
```
>Confirm props:
>* title value is text,it's confirm title,if title value is undefined it's don't show in confirm.
>* message value is text,it's confirm message,if message value is undefined it's don't show in confirm.
>* confirmButton value is text,it's default value is `confirm`.
>* cancelButton value is text,it's default value is `cancel`.
>* clssName value is class name,you can custom confirm style use className.
>* onConfirm value is function,wen confirm button is click modal will call onConfirm function, so you can add you code in onConfirm, don't forget set modal props show value is false.
>* onCancel value is function,wen cancel button is click modal will call onCancel function, you can set modal show value is false in this function.
## Dialog
Dialog is modal's child. Example see `example/dialog.js`. Demo open `demo/dialog.js` in browser.
```Javascript
import Modal,{Dialog} from 'react-modal-plugin'

<Modal show={true}>
  <Dialog
    size="small"
    width="50%"
    height="20px"
    style={
        top: '50%',
        backgroundColor: 'red',
      }
    className="custom-dialog"
  >
    <div>
      Your Html is here.
    </div>
  </Dialog>
</Modal>
```
>Dialog child:
>* Dialog must hava a child show some ting.
>Dialog props
>* size value is `small` `medium` `large` `full` ,default value is medium.
>>* Small dialog width is 400px height is 300px.
>>* Default dialog size is medium width is 600px height is 450px.
>>* Large dialog width is 800px height is 600px.
>>* Full screen dialog set position top right bottom left 20px.
>* width value is `px` `%` `auto` you can set dialog width.
>* height value is `px` `%` `auto` you can set dialog height.
>* style value is style object. you can set other style.
>* className can set style and css3 animate.
## Custom modal's child
`react-modal-plugin` just have a div(modal), div's child is the most important. Example see `example/customModal.js`. Demo open `demo/customModal.js` in browser.
```Javascript
import Modal from 'react-modal-plugin'
import Right from '../components/**/right'
<Modal show={true}>
  <Right/>
</Modal>
```
## Modal props
```Javascript
<Modal
  show={true}
  className="custom-modal"
  closeDelay=2000
  style={position:'absolute'}
  hiddenStyle={visibility: 'hidden'}
  replaceStyle={width:'400px'}
  replaceHiddenStyle={visibility: 'hidden',}
  emit={
    target: elementObject,
    align:'center',
    vertical:'top',
    offset:{x:0,y:20},
  }
  outsideClick:{
    isCall: true,
    callback:this.hidden,
  }
  onMask:()=>{this.setState({show:false})}
  onAfterClose:()=>{alert('modal already close')}
>
</Modal>
```
>* show: you can change `this.state.show` control modal open/close.
>* className: use class name can set custom style and set css3 animate.
>* closeDelay: if you close modal want animate, so you must delay close modal until animate finished.
>* style: wen modal open it hava default style if you set style default style don't work,just use your's.
>* hiddenStyle: wen modal close it hava default hiddenStyle if you set hiddenStyle default hiddenStyle don't work,just use your's.
>* replaceStyle and replaceHiddenStyle: modal style and hiddenStyle normal work,however, some attributes will be replaced.We provide modal mask is black you can use replaceStyle chang it to white.
>* emit outsideClick and replaceStyle together can set small modal , it's not full screen , For example you click a arrow show a select modal, the modal is small and near the arrow. Wen you click select modal outside link the modal close and browser open the link.
>>* emit.target is a element, your emit modal will near emit.target.
>>* emit.align values have `l2l(left) l2c l2r c2l c2c(center) c2r r2l r2c r2r(right)`. this values meaning modal to target,for example `l2l modal left to target left` `c2r modal center to target right`
>>* emit.vartical values have `t2t(top) t2m t2b m2t m2m(middle) m2b b2t b2m b2b(bottom)`. this values meaning modal to target, for example `t2t modal top to target top` `m2b modal middle to target bottom`
>>* emit.offset if you want emit modal and target have space you can set offset.x and offset.y their value is number.
>>* outsideClick: emit modal is small so you click outside of emit modal will close emit modal, you can set `this.setState({show:false})` in outsideClick.callback, why outsideClick.isCall, if in emit modal has a full screen modal opend you muse set outsideClick.isCall value false,untill full screen modal closed set outsideClick.isCall value true. See `demo/complex.html` wen click `choose wrong` button. 
>>* onMask: mask is modal black area, if you want click mask close modal, place set onMask.
>>* onAfterClose: this is modal close callback function, it's after closeDelay if you set closeDelay.
