import _ from 'lodash';
import './index.css';
import print from "./print";

  function component() {
    print()

    let element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }

  document.body.appendChild(component());