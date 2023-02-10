// entry file

import jquery from 'jquery';
import './main.css'
import { showButton } from './button/button';
import image from './assets/React-icon.png'
console.log({jquery})
showButton()

const picture = document.createElement('img');
const text = document.createElement('span')
picture.setAttribute('src', image);
text.textContent = "HELLO!"
document.body.appendChild(picture)
document.body.appendChild(text)