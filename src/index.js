import './index.css'

import 'the-graph/themes/the-graph-dark.css';

import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import fromJSON from 'the-graph/build/utils/fromJSON';
import graphJSON from './graphs/default/graph'
import library from './graphs/default/library'
import menus from './graphs/default/menus'
import App from './App'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const graph = fromJSON(graphJSON)

const props = {
  graph,
  width: 800,
  minZoom: 0.15,
  maxZoom: 15,
  height: 600,
  library,
  menus,
  editable: true,
  klayjs: 'klayjs/klay.js',
  onEdgeSelection: () => {},
  onNodeSelection: () => {},
  onPanScale: () => {},
  getMenuDef: () => {},
  displaySelectionGroup: true,
  forceSelection: false,
  offsetY: 100,
  offsetX: 100
}

render(<App {...props} />, document.querySelector('#app'))
