import React, {
    Component,
    Platform,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    Alert
} from 'react-native'

import HomeJobCell from './list/home-job-cell'
import HomeJobDetail from './list/home-job-detail'

import SearchBar from '../search-bar'

import JobData from './data/home-job'

export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listSource: new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2}).cloneWithRows(this._genRows({}))
        }

        this._renderRow = this._renderRow.bind(this)
        this._selectJob = this._selectJob.bind(this)
    }

    _listHeader(index, total, context) {
        return (
            <View style={styles.headerBody}>
                <Image style={{width: 52, height: 50}} source={require('../../images/icon_find_ok.png')}/>
                <View style={{paddingLeft: 20}}>
                    <Text style={{fontSize: 18}}>可<Text style={{color: '#11A984'}}>直接沟通</Text>的职位推荐</Text>
                    <Text style={{marginTop: 15, fontSize: 13, color: '#999'}}>来和老板直接聊offer吧</Text>
                </View>
            </View>
        )
    }

    _selectJob(job: Object) {
        const {navigator} = this.props

        console.log('into _selectJob with navigator', JSON.stringify(navigator))

        Alert.alert( '提示', '正在开发中...' + JSON.stringify(this.props), [ {text: '确定', onPress: () => console.log('into _selectJob Ok!')} ])

        if (navigator) {
            navigator.push({
                name: 'HomeJobDetail',
                component: HomeJobDetail,
                params: {job: job}
            })
        }
    }

    _renderRow(jobData) {
        return (<HomeJobCell onSelect={()=> this._selectJob(jobData)} jobData={jobData}/>)
    }

    _genRows(): Array<string> {
        return JobData
    }

    render() {
        let resultList = <ListView
            dataSource={this.state.listSource}
            renderRow={this._renderRow}
            renderHeader={this._listHeader}/>

        return (
            <View style={styles.container}>
                <SearchBar />
                {resultList}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerBody: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 15,
        flexDirection: 'row'
    },
    container: {
        top: Platform.OS === 'android' ? 0 : 20,
        flex: 1,
        backgroundColor: '#EEE',
        paddingBottom: 10
    }
})
