import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class RecipeDonateScreen extends Component{
  constructor(){
    super()
    this.state = {
      requestedRecipeList : []
    }
  this.requestRef= null
  }

  getRequestedRecipeList =()=>{
    this.requestRef = db.collection("requested_recipe")
    .onSnapshot((snapshot)=>{
      var requestedRecipeList = snapshot.docs.map(document => document.data());
      this.setState({
        requestedRecipeList : requestedRecipeList
      });
    })
  }

  componentDidMount(){
    this.getRequestedRecipeList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.recipe_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              this.props.navigation.navigate("RecieverDetails1",{"details": item})
            }}
             >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="DONATE RECIPE"/>
        <View style={{flex:1}}>
          {
            this.state.requestedRecipeList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Recipe</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedRecipeList}
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
    width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff00c3",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
  }
})