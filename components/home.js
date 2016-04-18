import React,{
    Component,
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native'

import HomePage from './pages/home'

export default class Home extends Component {
    render() {
        let defaultName = 'HomePage',
            defaultComponent = HomePage

        return (<Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route)=> {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            renderScene={(route,navigator)=>{
                let InitComponent = route.component;
                return <InitComponent {...route.params} navigator={navigator}/>
            }}
        />)
    }
}
