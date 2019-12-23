import { HelloWorldComponent } from './components/hello-world-component/helloWorldComponent';
import ReactDOM from 'react-dom';
import React from 'react';
import './master.scss'
import '../src/components/hello-world-component/helloWorldComponentStyles.scss';


ReactDOM.render(<HelloWorldComponent />, document.getElementById('root'));