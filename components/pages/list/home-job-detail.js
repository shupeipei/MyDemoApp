import React, {
    Component,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native'

export default class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.addEventListener('hardwareBackPress', ()=> this._pressButton())
        }
    }

    componentWillUnmount() {
        if (React.Platform.OS === 'android') {
            React.BackAndroid.removeEventListener('hardwareBackPress', ()=> this._pressButton())
        }
    }

    _pressButton() {
        let {navigator} = this.props,
            routers = navigator.getCurrentRoutes()

        if (routers.length > 1) {
            navigator.pop()
            return true
        }
        return false
    }

    render() {
        let {job} = this.props

        return (
            <View style={{flex: 1}}>
                <View
                    style={{padding: 10, marginTop: 20,justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>this._pressButton()}>
                        <Image source={require('../../images/icon_back.png')} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 17, flex: 1, textAlign: 'center', marginRight: 30}}>职位详情</Text>
                </View>
                <View style={{padding: 15, flexDirection: 'row'}}>
                    <Text style={{flex: 1}}>{job.title}</Text>
                    <Text style={{color: 'red'}}>{job.salary}</Text>
                </View>
                <View style={{padding: 15}}>
                    <Text style={{marginTop: 8, marginBottom: 8}}>{job.company}</Text>
                    <Text style={{color: '#999'}}>{job.info}</Text>
                </View>
            </View>
        )
    }
}
