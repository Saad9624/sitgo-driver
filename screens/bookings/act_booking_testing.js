import React, { Component } from 'react';

import { Alert, LayoutAnimation ,Dimensions 
    ,ImageBackground , StyleSheet,AsyncStorage, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,StatusBar , FlatList } from 'react-native';
import baseurl from '../../components/baseurl';

export default class active_booking extends React.Component {


    static navigationOptions ={
        header: null
    }
  constructor() {
    super();

    this.state = {
        booking_detail_arr:[]  ,
        showitem : true ,
        bookingfound: true
     }
  }

  componentWillMount(){
  //  this._getStorageValue()
  this.get_active_bookings(1)
  }

  async _getStorageValue(){
    var userid = await AsyncStorage.getItem('USERID')
    console.log("userid_on_active_bookings_screen" , userid)
   

   this.get_active_bookings(userid)
   
  }



  booking_detail_call(sid){
      const baseUrl = baseurl.uatbaseurl + 'driverbookings/viewbookings?'
    //const baseUrl = "https://hitsofficialpk.com/sitgo/booking/newbookings?";
   const param = `busid=1&time=12:30:00`;
   return `${baseUrl}${param}`;

 }

 get_active_bookings = async (s_id) => {

    try{

       const url = this.booking_detail_call(s_id)
       console.log(url)

       let response = await fetch(url)
      // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)

       const completeresponse =  await response.json()
       console.log("response " , completeresponse)

       if(completeresponse.message == 'Booking Found'){
           console.log("booking_detail_under_success")
           const st_array = completeresponse.userdetails 

           this.setState({
            booking_detail_arr:st_array,
          bookingfound:false
           })
       }
       else if(completeresponse.message == 'No Booking for today'){
           this.setState({
            bookingfound: true
           })
         console.log("under no bus found")
        
     }
      

    }
    catch(e){
        console.log(e)
    }
 }

 onPress = async (item)=>{

    if(this.state.showitem == false) {
        this.setState({
            showitem:true
            
        })
    }
    else{
        this.setState({
            showitem:false
            
        })
    }
 
  }


  render() {
    return (
      <View style={styles.MainContainer}>

      
<View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#000000'} translucent={true} /> 
        

                            <View style={{ flexDirection: 'row' , backgroundColor:'#ffffff',height:60 }}>
                                      <TouchableOpacity 
                                        onPress={() => this.props.navigation.goBack()}
                                        >

                                        <Image style={{marginTop:15 ,  marginLeft:25}} source={require('./../../assets/images/backbtn/back.png')}></Image>

                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:20}}>
                                           
                                            <Text style={{fontSize:25 , marginTop:10 , fontWeight:'bold'}}>Active Booking</Text>
                                     
                                     
                                        </View>
                              </View>

                          
                              <View style={{flexDirection:'row' , justifyContent:'space-between' , marginTop:10, marginLeft:25  , marginRight:20}}>

                                <Text style={styles.t1}>From</Text>
                                <Text  style={styles.t1}>To </Text>
                                <Text  style={styles.t1}>Date</Text>
                                <Text ></Text>
                              
                              </View>

                              <View style={{justifyContent:'center' , alignItems:'center'}}>

                                 {this.state.bookingfound && <Text style={{marginTop:100 , fontSize:20}}>No Booking found</Text> } 
                              </View>

                              <FlatList
                              style={{marginTop:20}}
                            data={ this.state.booking_detail_arr }
                            keyExtractor={(item,index)=>index}
                            renderItem={({item}) =>
                              ( 
                                  
                                  <TouchableOpacity
                                  onPress={() => this.onPress(item)}
                                  >
                                  
                                  
                     
                                
                                                          <View style={{marginTop:10,flexDirection:'row' , justifyContent:'space-between' , marginLeft:10 , marginRight:10}}>
                                                                      <Text style={{fontSize:12}}>{item.fromstop}</Text>
                                                                      <Text style={{fontSize:12}}>{item.tostop}</Text>
                                                                      <Text style={{fontSize:12}}>{item.date}</Text>
                                                                     

                                                            </View>
                            
                                                   {this.state.showitem &&           <ImageBackground 
             style={{width:Dimensions.get('window').width  
               , alignSelf:'center' , marginTop:10 , padding:10}}
             source={require('./../../assets/images/whiteback/whiteback.png')}>

                          <Text style={{marginTop:5 , marginLeft:10}}>Your Driver</Text>

                          <View style={{flexDirection:'row' , marginTop:10 , marginLeft:10}}>
                              <Image source={require('./../../assets/images/placeholder/placeholder.png')}></Image>
                              <Text style={{marginLeft:10 , marginTop:10 , fontSize:15}}>Mushtaq Ahmed</Text>

                          </View>

                    <View >
                                <View style={{flexDirection:'row' , marginLeft:10 , marginTop:10}}>
                                                            <Image 
                                                            style={{marginTop:5
                                                            }}
                                                            source={require('./../../assets/images/reddot/red.png')}></Image>

                                                            <Text style={{marginLeft:10,fontSize:15}}>From Bus Stop</Text>

                                                            <Text style={{marginLeft:10 , right:0 , position:'absolute',fontSize:15 ,marginRight:25}}>{item.fromstop}</Text>
                                            </View> 

                                            <View style={{flexDirection:'row' ,  marginLeft:10}}>
                                                        <Image
                                                            style={{marginLeft:2  ,marginTop:5}} 
                                                            source={require('./../../assets/images/greydots/grey.png')}></Image>

                                            </View> 
                                        
                                        

                                            <View style={{flexDirection:'row' , marginLeft:10}}>
                                                            <Image 
                                                        
                                                            source={require('./../../assets/images/reddot/red.png')}></Image>

                                                    <Text style={{marginLeft:10 ,fontSize:15}}>Destination Stop</Text>
                                                    <Text style={{marginLeft:10 ,fontSize:15, right:0 , position:'absolute' ,marginRight:25}}>{item.tostop}</Text>
                                            </View> 

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                            
                                                    <Text style={{marginLeft:30}}>Seats Available</Text> 
                                                   <Text style={{marginRight:30, right:0 , position:'absolute'}}>{item.seats    }</Text>
                                            </View>

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Seats No(s)</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>N/A</Text>
                                           </View>

                                           <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Time</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>{item.time}</Text>
                                          </View>

                                          <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Payment</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>{item.paymentmethod}</Text>
                                          </View>

                                          {/* <TouchableOpacity
                       // onPress={() => this.props.navigation.navigate('LOGIN')}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>Cancel Booking</Text>
                        </View>
                            
                        </TouchableOpacity> */}


                    </View>
                    
                             



             </ImageBackground>
                                                            
                                                        }
                                                            
                                                             <View opacity={0.3}  style={{  marginTop:5 , borderBottomColor: 'grey',  borderBottomWidth: 1,  }}></View>
                                 
                          </TouchableOpacity> 
                          )}
                            keyExtractor={(item, index) => index.toString()}
                          />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor:'#F5F5F5' ,
   
    //paddingTop: (Platform.OS === 'ios') ? 20 : 0,
   
  },

  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
          backgroundColor: "#FFFFFF",
  },


  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    fontSize: 15,
    padding: 10,
   
  },

  category_View: {
    marginVertical: 5,
    marginTop:20 , 
    
  },
  parent :{
    flex:1 ,
    backgroundColor:'#F5F5F5'
} ,
t1:{color:'#103056' , fontSize:20}
,
tocentertext:{ 
  flex:1 ,
  marginRight:20 ,
  marginLeft:20 ,
  flexDirection:'row' ,
   alignItems: 'center'
, justifyContent: 'space-between'
} ,
loginbtn :{
  marginTop:80,
  marginBottom:40 ,
  height:50 ,
  width:'40%' , 
  marginRight:5 ,
  backgroundColor:'#103056' ,
  borderRadius:4 ,
  alignItems:'center',
  justifyContent:'center' ,
  alignContent:'center' ,
  alignSelf:'center'
  

} ,
logintext:{
  color:'white' ,
  fontSize:15 , 

  alignItems:'center' , 
  
},
});