/**
 * Created by clark on 16/4/28.
 */
import '../css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../component/hello';

let [a,b] = [1,2];
let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Hello name="Clark" />, app);