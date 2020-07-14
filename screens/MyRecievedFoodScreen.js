import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class MyReceivedFoodScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      receivedFoodList : []
    }
  this.requestRef= null
  }

  getReceivedFoodList =()=>{
    this.requestRef = db.collection("requested_food")
    .where('user_id','==',this.state.userId)
    .where("food_status", '==','received')
    .onSnapshot((snapshot)=>{
      var receivedFoodList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        receivedfoodList : receivedFoodList
      });
    })
  }

  componentDidMount(){
    this.getReceivedFoodList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    console.log(item.food_name);
    return (
      <ListItem
        key={i}
        title={item.food_name}
        subtitle={item.foodStatus}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Received Food" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.receivedfoodList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Received Food</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.receivedFoodList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})