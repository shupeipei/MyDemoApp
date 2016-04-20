import React,{
    Component,
    Platform,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

export default class DiscoverDetail extends Component {
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
        let {discover} = this.props
        return (
            <ScrollView style={styles.container}>
                <View
                    style={{padding: 10, marginTop: 20,justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>this._pressButton()}>
                        <Image source={require('../../../images/icon_back.png')} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 17, flex: 1, marginLeft: 5}}>发现</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,textAlign:'center',lineHeight:30}}>{discover.infoTitle}</Text>
                    <Text style={{color:'#999',textAlign:'center',marginTop:15}}>关键字：{discover.info}</Text>
                    <Text style={{color:'#999',textAlign:'center',marginTop:10}}>发布日期：{discover.date}</Text>
                    <View style={{height: 180}}>
                        <Image style={styles.largeImage} source={{uri: discover.logo}}/>
                    </View>
                    <Text style={{color:'#999',lineHeight:25}}>{discover.content}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        marginBottom: 80
    },
    largeImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent',
        resizeMode: 'contain',
        marginTop: 25,
        marginBottom: 35
    }
})
