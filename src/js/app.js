/**
 * Created by clark on 16/4/28.
 */
import '../css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../component/hello';
//import $ from 'jquery';
import Ajax from '../lib/ajax.js';

let app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Hello name="ClarkShao" />, app);

/*
 $.getJSON('/tapi/vr/get.php',{
 start: 0,
 limit: 6
 },(json) => {
 console.log(json)
 });*/
