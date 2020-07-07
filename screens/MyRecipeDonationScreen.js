import React ,{Component} from 'react'
import {View, Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react-native';
import {Card,Icon,ListItem} from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class MyRecipeDonationScreen extends Component {
   constructor(){
     super()
     this.state = {
       donorId : firebase.auth().currentUser.email,
       donorName : "",
       allDonations : []
     }
     this.requestRef= null
   }

   static navigationOptions = { header: null };

   getDonorDetails=(donorId)=>{
     db.collection("users").where("email_id","==", donorId).get()
     .then((snapshot)=>{
       snapshot.forEach((doc) => {
         this.setState({
           "donorName" : doc.data().first_name + " " + doc.data().last_name
         })
       });
     })
   }

   getAllDonations =()=>{
     this.requestRef = db.collection("all_donations1").where("donor_id" ,'==', this.state.donorId)
     .onSnapshot((snapshot)=>{
       var all_donations1 = []
       snapshot.docs.map((doc) =>{
         var donation = doc.data()
         donation["doc_id"] = doc.id
         allDonations.push(donation)
       });
       this.setState({
         allDonations1 : allDonations1
       });
     })
   }

   sendRecipe=(recipeDetails)=>{
     if(recipeDetails.request_status === "Recipe Sent"){
       var requestStatus = "Donor Interested"
       db.collection("all_donations").doc(recipeDetails.doc_id).update({
         "request_status" : "Donor Interested"
       })
       this.sendNotification(recipeDetails,requestStatus)
     }
     else{
       var requestStatus = "Recipe Sent"
       db.collection("all_donations").doc(recipeDetails.doc_id).update({
         "request_status" : "Recipe Sent"
       })
       this.sendNotification(recipeDetails,requestStatus)
     }
   }

   sendNotification=(recipeDetails,requestStatus)=>{
     var requestId = recipeDetails.request_id
     var donorId = recipeDetails.donor_id
     db.collection("all_notifications")
     .where("request_id","==", requestId)
     .where("donor_id","==",donorId)
     .get()
     .then((snapshot)=>{
       snapshot.forEach((doc) => {
         var message = ""
         if(requestStatus === "Recipe Sent"){
           message = this.state.donorName + " sent you recipe"
         }else{
            message =  this.state.donorName  + " has shown interest in donating the recipe"
         }
         db.collection("all_notifications").doc(doc.id).update({
           "message": message,
           "notification_status" : "unread",
           "date"                : firebase.firestore.FieldValue.serverTimestamp()
         })
       });
     })
   }

   keyExtractor = (item, index) => index.toString()

   renderItem = ( {item, i} ) =>(
     <ListItem
       key={i}
       title={item.recipe_name}
       subtitle={"Requested By : " + item.requested_by +"\nStatus : " + item.request_status}
       leftElement={<Icon name="recipe" type="font-awesome" color ='#696969'/>}
       titleStyle={{ color: 'black', fontWeight: 'bold' }}
       rightElement={
           <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor : item.request_status === "Recipe Sent" ? "#0099ff" : "#ff00c3"
              }
            ]}
            onPress = {()=>{
              this.sendRecipe(item)
            }}
           >
             <Text style={{color:'#ffff'}}>{
               item.request_status === "Recipe Sent" ? "Recipe Sent" : "Send Recipe"
             }</Text>
           </TouchableOpacity>
         }
       bottomDivider
     />
   )


   componentDidMount(){
     this.getDonorDetails(this.state.donorId)
     this.getAllDonations()
   }

   componentWillUnmount(){
     this.requestRef();
   }

   render(){
     return(
       <View style={{flex:1}}>
         <MyHeader navigation={this.props.navigation} title="My Donations"/>
         <View style={{flex:1}}>
           {
             this.state.allDonations.length === 0
             ?(
               <View style={styles.subtitle}>
                 <Text style={{ fontSize: 20}}>List of all recipe Donations</Text>
               </View>
             )
             :(
               <FlatList
                 keyExtractor={this.keyExtractor}
                 data={this.state.allDonations}
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
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  },
  subtitle :{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  }
})