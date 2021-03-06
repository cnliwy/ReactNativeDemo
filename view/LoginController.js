'use strict';

import React,{Component} from 'react';
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

class LoginController extends React.Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {userinput: '',pwdinput:''};
  }

  loginAction(){
    this.props.navigation.navigate('Main',{username:'李天王'});
  }

   static navigationOptions = {
           headerTitle: '登录',
       };

  render() {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            <TextInput placeholder="请输入账号" style={styles.input}
                onChangeText={(userinput) => this.setState({userinput})}/>
            <TextInput placeholder="请输入密码" style={styles.input}
                    onChangeText={(pwdinput) => this.setState({pwdinput})}/>
            <Text style={styles.hello}>Hello ReactNative</Text>
                <View style={{margin:16}}>
                    <Button onPress={this.loginAction.bind(this)} title="登录"/>
                 </View>
                 <View style={{margin:16}}>
                                     <Button onPress={registerAction} title="注册"/>
                                  </View>
          </View>

          <View style={styles.title}>
                       <Text style={styles.hello}>create by liwy</Text>
                  </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
    input:{
        margin:16,
        height:45,
        width:Dimensions.get('window').width - 32,
         borderRadius: 20,//输入框边界圆角度数
         borderColor: 'skyblue',//输入框边界颜色
         marginBottom:16,
         paddingLeft:10,//这里是为了在圆角之后输入
         padding:0,//去掉Android默认的padding
         borderWidth: 1,
         alignSelf:'center'//自身居中
    },
    title: {
    height:50,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
export default LoginController;