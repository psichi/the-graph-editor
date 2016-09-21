import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TheGraph from 'the-graph/build/App';
import fromJSON from 'the-graph/build/utils/fromJSON';
import graphJSON from './graphs/default/graph'
import library from './graphs/default/library'
import menus from './graphs/default/menus'

export default class Main extends React.Component {
  static propTypes = {

  }

  render() {
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
      onEdgeSelection: () => {},
      onNodeSelection: () => {},
      onPanScale: () => {},
      getMenuDef: () => {},
      displaySelectionGroup: true,
      forceSelection: false,
      offsetY: 100,
      offsetX: 100
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TheGraph {...props} />
      </MuiThemeProvider>
    )
  }
}
