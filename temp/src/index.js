
import './index.css';
import {cube} from "./print";
import _ from "lodash";
  // let heihei = _.join([1,2,3])

  function component() {
  
    let element = document.createElement('div');
  

   // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = ['5 cubed is equal to ' + cube(5),'Hello webpack'].join(' ') +heihei
    element.innerHTML = ['5 cubed is equal to ' + cube(5),'Hello webpack'].join(' ') 
    element.classList.add('hello');
    return element;
  }

  document.body.appendChild(component());



  fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(json => {
       console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
      console.log(json)
     })
     .catch(error => console.error('Something went wrong when fetching this data: ', error))