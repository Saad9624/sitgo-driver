import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View , Text, Button , NetInfo, Image ,
  Alert ,  TouchableOpacity,ImageBackground , StyleSheet , Share ,StatusBar ,
  Dimensions  ,FlatList ,
   ActivityIndicator , Platform} from 'react-native';
import { BackHandler } from 'react-native';
import * as Font from 'expo-font';
import { Card } from 'react-native-elements' ; 
import { ScrollView } from 'react-native-gesture-handler';
import baseurl from './../../components/baseurl' ;




export default class currentloc extends React.Component {

    static navigationOptions = {
        header:  null
    }
   
    constructor(props){
        super(props);
         this.state= {
          fontLoaded: false,
            latitude : 24.98890 , 
            longitude : 67.90 , 
            visible : false ,
            bookingfound: true ,
            tripsdetail:[] ,

            previoustime: '' ,
            previous_bus_id:'' ,
            previous_date:'' ,

            next_time: '' ,
            next_bus_id:'' ,
            next_date:'' ,


            markers: [{
                title: 'hello',
                coordinates: {
                  latitude: 0,
                  longitude: 0
                },
              },
              ]
        
        };
      }
     

      componentWillMount(){
        this.get_active_bookings(1)
        this.get_previous_bookings(1)

        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        console.log('current_time' ,hours + ':' + min + ':' + sec )
      }
       async componentDidMount() {

        await Font.loadAsync({
          'opreg': require('./../../assets/fonts/opreg.ttf'),
        });
    
        this.setState({ fontLoaded: true });

        NetInfo.getConnectionInfo().then(connectionInfo => {
          if(connectionInfo.type  == 'none'){
            this.checklogin()
          } 
          else{
            navigator.geolocation.getCurrentPosition(
              ({coords:{latitude , longitude}}) =>this.setState({latitude , longitude}))
          }
          
        });
        
      }


      checklogin = async ()=> {
        Alert.alert(
          'No Internet Connection',
          'Please check your internet connection', 
          [
            { text: 'okay', onPress: () => this.props.navigation.navigate('LOGIN') },

          ],
          { cancelable: false }
        );
       }


       active_booking_call(sid){
        const baseUrl = baseurl.uatbaseurl + 'driverbookings/active?'
      //const baseUrl = "https://hitsofficialpk.com/sitgo/booking/newbookings?";
     const param = `busid=1`;
     return `${baseUrl}${param}`;
  
   }
  
   get_active_bookings = async (s_id) => {
  
      try{
  
         const url = this.active_booking_call(s_id)
         console.log(url)
  
         let response = await fetch(url)
        // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)
  
         const completeresponse =  await response.json()
         console.log("response " , completeresponse)
  
         if(completeresponse.message == 'Booking Found'){
             console.log("underif_active_boooking")
             const time = completeresponse.userdetails[0].time 
             const busid = completeresponse.userdetails[0].bus_id

             this.setState({
              bookingfound : false ,
              next_time  : time ,
              next_bus_id : busid ,
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

    
   previous_booking_call(sid){
    const baseUrl = baseurl.uatbaseurl + 'driverbookings/previousbooking?'
  //const baseUrl = "https://hitsofficialpk.com/sitgo/booking/newbookings?";
 const param = `busid=1`;
 return `${baseUrl}${param}`;

}

get_previous_bookings = async (s_id) => {

  try{

     const url = this.previous_booking_call(s_id)
     console.log(url)

     let response = await fetch(url)
    // let response = await fetch(`https://hitsofficialpk.com/sitgo/stops/bus?stopid=${this.state.stopid}`)

     const completeresponse =  await response.json()
     console.log("response " , completeresponse)

     if(completeresponse.message == 'Booking Found'){
         console.log("underif_active_boooking")
         const time = completeresponse.userdetails[0].time 
         const busid = completeresponse.userdetails[0].bus_id

         this.setState({
          bookingfound : false ,
          previoustime  : time ,
          previous_bus_id : busid ,
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

    render() {

    
     

        const {latitude , longitude} = this.state
  
        if (latitude) {
           return ( 
              
            <View style={styles.parent}>  
              <View style={{flex:1}}>
                                <View style={{flexDirection:'row' , marginTop:30}}>
                                        <TouchableOpacity
                                                onPress={() => this.props.navigation.openDrawer()}>
                                                                            <Image source={require('./../../assets/images/burger/burger.png')}
                                                                                    style={styles.burger}>
                    
                                                                            </Image>
                                                                        </TouchableOpacity>

                   {this.state.fontLoaded ? (           <Text style={styles.h1}>Home</Text>) : null }

                            
                                   </View>

                                  
                           <View style={{flexDirection:'column' , flex:10}}>
                           
                         <View style={{flex:6}}>
                             <MapView 
                                                         zoomEnabled={true}
                                                         
                                                         showsUserLocation={true}
                                                         showsCompass={true}
                                                         
                                                         style={{flex:1}}
                                                         initialRegion={{
                                                           latitude ,
                                                           longitude ,
                                                           latitudeDelta: 0.001,
                                                           longitudeDelta: 0.001,
                                                         }}
                                                       >
                                        
                                    
                                        {this.state.markers.map((marker, index) => 
                                            ( <MapView.Marker key={index} coordinate={marker.coordinates} 
                                            title={marker.title} /> ))}

                                        </MapView>
                           </View> 

                           <View style={{flex:4 , marginRight:20 , marginLeft:20 }}>

                           {this.state.bookingfound && <Text >No bookings for today</Text>}

                                              {/* <ScrollView>
                           <FlatList
                                  style={{marginTop:10 }}
                                      data={this.state.tripsdetail}
                                      keyExtractor={(item,index)=>index}
                                      renderItem={({ item }) => 
                                      (
                                         <Card style={{width:Dimensions.get('window').width / 100 * 80 , height:Dimensions.get('window').height / 100 * 80 }}>
                                                            <Text>Bus id {item.bus_id}</Text>
                                                            <View style={{flexDirection:'row', marginTop:5 , justifyContent:'space-between'}}>
                                                                      <Text style={{marginRight:20}}>{item.time}</Text>
                                                                      <TouchableOpacity>
                                                                              <Text style={{alignSelf:'flex-end' , marginLeft:20 , color:'blue' , fontWeight:'bold'}}>View Bookings</Text>
                                                                      </TouchableOpacity>
                                                                

                                                            </View>
                                                          
                                            </Card>
                                      )}
                                      keyExtractor={(item, index) => index.toString()}
                                    />   

                                    </ScrollView>         */}

                                            <Text style={{marginTop:5 ,color:'grey'}}>NEXT TRIP</Text>
                                            <Card>
                                                            <Text>Bus id: {this.state.next_bus_id}</Text>
                                                            <View style={{flexDirection:'row', marginTop:5 , justifyContent:'space-between'}}>
                                                                <Text>{this.state.next_time}</Text>
                                                                <TouchableOpacity>

                                                                     <Text style={{alignSelf:'flex-end' , color:'blue' , fontWeight:'bold'}}>View Bookings</Text>
                                                                </TouchableOpacity>
                                                                  

                                                            </View>
                                                          
                                            </Card>


                                            <Text style={{marginTop:5 ,color:'grey'}}>LAST TRIP</Text>
                                            <Card>
                                                            <Text>Bus id: {this.state.previous_bus_id}</Text>
                                                            <View style={{flexDirection:'row', marginTop:5 , justifyContent:'space-between'}}>
                                                                <Text>{this.state.previoustime}</Text>
                                                                <TouchableOpacity>

                                                                    <Text style={{alignSelf:'flex-end' , color:'blue' , fontWeight:'bold'}}>View Bookings</Text>
                                                                    </TouchableOpacity>

                                                            </View>
                                            </Card>


                           </View>
                    

                           </View>

            
               
                                                    
                                     
                                            
                                      
              </View>
              </View>
             
          );
       }
        return(
            <View style={{flex: 1, paddingTop: 20 , justifyContent:'center'}}>
            <ActivityIndicator color='#FF4500' size="large"  />
          </View>
        ) 
      }

  }

const styles = StyleSheet.create({
  parent :{
      flex:1 ,
      backgroundColor:'#F5F5F5'
  } ,
  statusBarBackground: {
      height: (Platform.OS === 'ios') ? 18 : 0,
      backgroundColor: "#FF4500",
    },
 burger:{ 
  marginTop:20 ,
  marginLeft:20 ,
  width : 20 , 
  height : 20 ,  } ,
h1:{
  fontWeight:'bold' ,
  fontSize:20 ,
  marginTop:17 ,
  marginLeft:20 ,
  fontFamily:'opreg'
} ,
h2:{
fontWeight:"700" , 
  fontSize:20 ,
  marginLeft:60 , 
  marginTop:5 ,
  fontFamily:'opreg'
},
title:{marginLeft:15 ,fontWeight:'100' , fontSize:10 ,fontFamily:'opreg'},

stopname:{marginLeft:25 , fontSize:15 ,fontFamily:'opreg'} ,

seats:{marginTop:10 , marginLeft:25 , fontSize:10 ,fontFamily:'opreg'} ,

viewstyle:{
  marginLeft:25 ,
  marginRight:25 ,
padding:2 ,
  borderBottomColor: 'black',
  borderBottomWidth: 1,
}
 
});

  
  