'use strict';

import React from 'react';
import {
  Alert,
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,//获取屏幕宽高
  FlatList,
} from 'react-native';


class FriendListController extends React.Component {

  //构造函数
  constructor(props) {
    super(props);
  }
   componentDidMount() {
        const { params } = this.props.navigation.state;
    }


    static navigationOptions = {
             title: '我的好友',
         };
  render() {
  const { params } = this.props.navigation.state;
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.container}>
            <FlatList
             data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                      ]}
                      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
          <View style={styles.title}>
           <Text style={styles.hello}>create by liwy</Text>
           </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
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
  item:{
    height:40,
    textAlign:'left',
    marginLeft:10,
    fontSize:18,
  }
});
export default FriendListController;