import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator
} from 'react-native'

import HelloScreen from './components/hello'

// import TestNavigator from './components/testNavigator'

class MyDemoApp extends Component {
  render() {
    const defaultName = 'HelloScreen'

    return (
      // <TestNavigator />
      <Navigator
        initialRoute={{ name: defaultName, component: HelloScreen }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
        }}
        renderScene={(route, navigator) => {
          let Component = route.component
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    )
  }
}

AppRegistry.registerComponent('MyDemoApp', () => MyDemoApp)
