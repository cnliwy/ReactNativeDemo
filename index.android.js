'use strict';

import React,{Component}  from 'react';

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
import { StackNavigator } from 'react-navigation'

import LoginController from './view/LoginController'
import MainController from './view/MainController'

// 注册导航
const Navigator  = StackNavigator({
    Login: { screen: LoginController},
    Main: {screen: MainController}
}, {
            headerBackTitle:null,
             headerTintColor:'#333333',
             showIcon:true,
            swipeEnabled:false,
            animationEnabled:false,
     },
 );


class NativeWorld extends React.Component {
  //构造函数
  constructor(props) {
    super(props);
  }

  render() {
   return(
       <Navigator
       />
       );
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

AppRegistry.registerComponent('NativeWorld', () => NativeWorld);