/**
 * Created by clark on 16/4/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../component/hello';
require('../css/base.scss');

let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Hello name="NateSteven" />, app);