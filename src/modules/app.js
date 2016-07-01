/**
 * Created by clark on 16/4/28.
 */
import '../css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/hello';
import Ajax from '../libs/ajax.js';

let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Hello name="ClarkShao" />, app);