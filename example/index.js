/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './index.css'

class Root extends React.Component {

  render () {
    return <div className={css.index}>
      <div className={css.list}>
        <li>
          <a href="./alert.html">Alert</a>
          <span>Alert you can custom title message button and class name.</span>
        </li>
        <li>
          <a href="./confirm.html">Confirm</a>
          <span>Confirm it's like alert.</span>
        </li>
        <li>
          <a href="./dialog.html">Dialog</a>
          <span>We provide a lot of dialog and you can custom dialog.</span>
        </li>
        <li>
          <a href="./customModal.html">Custom Modal</a>
          <span>We support you custom modal, we provide alert dialog alike custom modal.</span>
        </li>
        <li>
          <a href="./customStyle.html">Custom Style</a>
          <span>Custom style can change modal style.</span>
        </li>
        <li>
          <a href="./replaceStyle.html">Replace Style</a>
          <span>Moda style is persist, you can replace some style or add some style.</span>
        </li>
        <li>
          <a href="./closeDelay.html">Close Delay</a>
          <span>Close delay it's often width animate and custom class name, see animate demo.</span>
        </li>
        <li>
          <a href="./onAfterClose.html">On After Close</a>
          <span>Wen you use close delay on after close will wait modal closed.</span>
        </li>
        <li>
          <a href="./animate.html">Animate</a>
          <span>Animate rely on custom class name and close delay.</span>
        </li>
        <li>
          <a href="./emitModal.html">Emit Modal</a>
          <span>Emit modal is not full screen modal.You can click outside of modal.</span>
        </li>
        <li>
          <a href="./emitList.html">Emit List</a>
          <span>You can scroll document in this example.</span>
        </li>
        <li>
          <a href="./complex.html">Complex</a>
          <span>A lot of modal can together enjoy it.</span>
        </li>
      </div>
    </div>
  }
}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
