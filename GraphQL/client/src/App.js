import React, { Component } from 'react'
import Tabs from './components/Tabs/Tabs'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './components/theme'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  url:"http://localhost:3100/graphql"
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Tabs />
      </MuiThemeProvider>
    );
  }
}

export default App;
