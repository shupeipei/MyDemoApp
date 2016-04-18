import React,{
    Component,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native'

import FirstPageComponent from './firstPageComponent'

export default class TestNavigator extends Component {
    render() {
        let defaultName = 'FirstPageComponent'
        let defaultComponent = FirstPageComponent

        return (<Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route)=> {
                return Navigator.SceneConfigs.HorizontalSwipeJump
            }}
            renderScene={(route, navigator)=>{
                let Component = route.component
                return <Component {...route.params} navigator={navigator}/>
            }}
        />)
    }
}
