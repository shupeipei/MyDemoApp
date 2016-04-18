import React,{
    Component,
    StyleSheet,
    Image
} from 'react-native'

import Frame from './frame'

export default class HelloScreen extends Component {
    constructor(props) {
        super(props)

        const {navigator} = props

        setTimeout(()=> {
            navigator.replace({name: 'Frame', component: Frame})
        }, 500)
    }

    render() {
        return (
            <Image source={require('../images/hello.png')} style={styles.backgroundImage}/>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover'
    }
})
