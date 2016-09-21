import './index.css'

import 'the-graph/themes/the-graph-dark.css';

import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<App/>, document.querySelector('#app'))
