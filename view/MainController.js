'use strict';

import React from 'react';
import {
  Alert,
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,//获取屏幕宽高
} from 'react-native';

const registerAction = () => {
  Alert.alert('敬请期待！');
};
var username = null;
class MainController extends React.Component {
  //构造函数
  constructor(props) {
    super(props);
  }
   componentDidMount() {
         const {params} = this.props.navigation.state;
         username = params.username;
     }

    findAction(){
        Alert.alert("我是："+ this.username);
    }

  backAction(){
    this.props.navigation.goBack();
  }
    static navigationOptions = {
             title: '我的首页',
         };
  render() {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.title}>
             <Text style={styles.hello}>首页</Text>
        </View>
          <View style={styles.container}>
            <Text style={styles.hello}>Hello ReactNative</Text>
             <View style={{margin:16}}>
                                <Button onPress={this.findAction.bind(this)} title="查询"/>
                             </View>
                <View style={{margin:16}}>
                    <Button onPress={this.backAction.bind(this)} title="返回"/>
                 </View>
          </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
    title: {
    height:50,
    justifyContent: 'center',
    backgroundColor:'powderblue'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
export default MainController;