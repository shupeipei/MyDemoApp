import {
    Component,
    Dimensions,
    Image,
    View,
    Platform,
    StyleSheet,
    Text
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'

import HomePage from './pages/home'
import Message from './pages/message'
import Discover from  './pages/discover'
import Me from './pages/me'

const HOME_TAB = 'homeTab',
      HOME_NORMAL = require('../images/icon_home_nor.png'),
      HOME_PRESS = require('../images/icon_home_pre.png'),

      MESSAGE_TAB = 'messageTab',
      MESSAGE_NORMAL = require('../images/icon_message_nor.png'),
      MESSAGE_PRESS = require('../images/icon_message_pre.png'),

      DISCOVER_TAB = 'discoverTab',
      DISCOVER_NORMAL = require('../images/icon_disc_nor.png'),
      DISCOVER_PRESS = require('../images/icon_disc_pre.png'),

      ME_TAB = 'meTab',
      ME_NORMAL = require('../images/icon_me_nor.png'),
      ME_PRESS = require('../images/icon_me_pre.png')

export default class Frame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedTab: HOME_TAB,
            tabBarShow:true
        }
    }

    _renderBadge(badgeCount) {
        if (!badgeCount) {
            return null
        }
        return (
            <Image style = {styles.badgeBg} source = {require('../images/message_num_bg.png')}>
                <Text style = {styles.badgeText}>{badgeCount}</Text>
            </Image>
        )
    }

    _renderTabItem(img, selectedImg, tag, title, badgeCount, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={()=> <Image style={styles.tabIcon} source={img}/>}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderBadge={()=> this._renderBadge(badgeCount)}
                renderSelectedIcon={()=> <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={()=> this.setState({selectedTab: tag})}>
                {childView}
            </TabNavigator.Item>
        )
    }

    _createChildView(tag) {
        let renderView,
            {navigator} = this.props

        switch (tag) {
            case HOME_TAB:
                renderView = <HomePage navigator={navigator} />
                break
            case MESSAGE_TAB:
                renderView = <Message navigator={navigator} />
                break
            case DISCOVER_TAB:
                renderView = <Discover navigator={navigator} />
                break
            case ME_TAB:
                renderView = <Me navigator={navigator} />
                break
            default:
                break
        }
        return (<View style = {styles.container}>{renderView}</View>)
    }

    render() {
        let {tabBarShow} = this.state

        return (
            <View style = {styles.container}>
                <TabNavigator
                    hidesTabTouch = {false}
                    sceneStyle = {{paddingBottom: 0}}
                    tabBarStyle = {tabBarShow ? styles.tabNav : styles.tabNavHide}>

                    {this._renderTabItem(HOME_NORMAL, HOME_PRESS, HOME_TAB, '首页', 0, this._createChildView(HOME_TAB))}
                    {this._renderTabItem(MESSAGE_NORMAL, MESSAGE_PRESS, MESSAGE_TAB, '消息', 1, this._createChildView(MESSAGE_TAB))}
                    {this._renderTabItem(DISCOVER_NORMAL, DISCOVER_PRESS, DISCOVER_TAB, '发现', 0, this._createChildView(DISCOVER_TAB))}
                    {this._renderTabItem(ME_NORMAL, ME_PRESS, ME_TAB, '我的', 0, this._createChildView(ME_TAB))}
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabNav: {
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    selectedTitleStyle: {
        color: '#11A984'
    },
    badgeBg: {
        width: 14,
        height: 14,
        marginTop: 6
    },
    badgeText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent'
    },
    tabIcon: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    }
})
