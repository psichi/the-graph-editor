import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import TheGraph from 'the-graph/build/App'

export default class Main extends React.Component {
  static propTypes = {

  }

  render() {
    console.log('GRAPH PROPS', this.props)
    return (
        <TheGraph {...this.props} />
    )
  }
}
