import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class RecieverDetailsScreen1 extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      recieverId1      : this.props.navigation.getParam('details')["user_id"],
      requestId1       : this.props.navigation.getParam('details')["request_id1"],
      recipeName        : this.props.navigation.getParam('details')["recipe_name"],
    reasonToRequest   : this.props.navigation.getParam('details')["reason_to_request"],
      recieverName1    : '',
      recieverContact1 : '',
      recieverAddress1 : '',
      recieverRequestDocId1 : ''
    }
  }



getRecieverDetails(){
  db.collection('users').where('email_id','==',this.state.recieverId1).get()
  .then(snapshot=>{
    snapshot.forEach(doc=>{
      this.setState({
        recieverName1    : doc.data().first_name,
        recieverContact1 : doc.data().contact,
        recieverAddress1 : doc.data().address,
      })
    })
  });

  db.collection('requested_recipe').where('request_id1','==',this.state.requestId1).get()
  .then(snapshot=>{
    snapshot.forEach(doc => {
      this.setState({recieverRequestDocId1:doc.id})
   })
})}

updateRecipeStatus=()=>{
  db.collection('all_donations1').add({
    recipe_name           : this.state.recipeName,
    request_id1          : this.state.requestId1,
    requested_by1        : this.state.recieverName1,
    donor_id1            : this.state.userId,
    request_status1      :  "Donor Interested"
  })
}



componentDidMount(){
  this.getRecieverDetails()
}


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.1}}>
          <Header
            leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
            centerComponent={{ text:"Donate Recipe", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "#eaf8fe"
          />
        </View>
        <View style={{flex:0.3}}>
          <Card
              title={"Recipe Information"}
              titleStyle= {{fontSize : 20}}
            >
            <Card >
              <Text style={{fontWeight:'bold'}}>Name : {this.state.recipeName}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>ReasonToRequest : {this.state.reason_to_request}</Text>
            </Card>
          </Card>
        </View>
        <View style={{flex:0.3}}>
          <Card
            title={"Reciever Information"}
            titleStyle= {{fontSize : 20}}
            >
            <Card>
              <Text style={{fontWeight:'bold'}}>Name: {this.state.recieverName1}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Contact: {this.state.recieverContact1}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Address: {this.state.recieverAddress1}</Text>
            </Card>
          </Card>
        </View>
        <View>
          {
            this.state.recieverId1 !== this.state.userId
            ?(
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{
                    this.updateRecipeStatus()
                    this.props.navigation.navigate('MyRecipeDonations')
                  }}>
                <Text>I want to Donate</Text>
              </TouchableOpacity>
            )
            : null
          }
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    marginTop:80,
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})