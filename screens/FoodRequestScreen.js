import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class FoodRequestScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      foodName:"",
      healthIssues:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(foodName,healthIssues)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_food').add({
        "user_id": userId,
        "food_name":foodName,
        "health_issues":healthIssues,
        "request_id"  : randomRequestId,
    })

    this.setState({
        foodName :'',
        healthIssues : ''
    })

    return Alert.alert("Food Requested Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="REQUEST FOOD"/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"ENTER FOOD NAME"}
                onChangeText={(text)=>{
                    this.setState({
                        foodName:text
                    })
                }}
                value={this.state.foodName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"ANY HEALTH ISSUES"}
                onChangeText ={(text)=>{
                    this.setState({
                        healthIssues:text
                    })
                }}
                value ={this.state.healthIssues}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.foodName,this.state.healthIssues)}}
                >
                <Text style= {{color:'white'}}>REQUEST</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'blue',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff00c3",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)