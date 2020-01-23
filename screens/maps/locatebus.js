import React from 'react';
import MapView from 'react-native-maps';
import { View , Text, Button , NetInfo, Image ,
    Alert ,  TouchableOpacity,ImageBackground , StyleSheet , Share ,StatusBar ,
    Dimensions  ,
     ActivityIndicator , Platform} from 'react-native';

     import Modal from 'react-native-modal';


export default class locatebus extends React.Component {

    static navigationOptions = {
        header:  null
    }

    state = {
     visibleModal: null,
    }

    openmodal = () =>{
      this.setState({
        visibleModal : 5
      })
    }
  
    closemodal = () =>{
      this.setState({
        visibleModal: null
      })
    }

    _renderModalContent = () => (
      <View style={styles.modalContent}>
    
    <TouchableOpacity   onPress = {() => this.closemodal()} >
                  <View   style={styles.payview} > 
  
                              <View style={{flexDirection:'row' , flex:1}} >
  
                                        <Text style={styles.payment}>Choose Payment Options</Text>
  
                                        <TouchableOpacity 
                                            style={{right:0 , position:'absolute' }}
                                         onPress = {() => this.closemodal()} >
                                                <Image
                                                style={{marginTop:15  , marginRight:15}}
                                                source={require('./../../assets/images/ddwhite/ddwhite.png')}></Image>
                                          </TouchableOpacity>
  
                                </View>
  
                    </View>
                    </TouchableOpacity>
  
                    <ImageBackground 
             style={{width:Dimensions.get('window').width  
               , alignSelf:'center' , marginTop:10 , padding:10}}
             source={require('./../../assets/images/whiteback/whiteback.png')}>

                          <Text style={{marginTop:5 , marginLeft:10}}>Your Driver</Text>

                          <View style={{flexDirection:'row' , marginTop:10 , marginLeft:10}}>
                              <Image source={require('./../../assets/images/placeholder/placeholder.png')}></Image>
                              <Text style={{marginLeft:10 , marginTop:10 , fontSize:15}}>Mushtaq Ahmed</Text>

                              <Image
                              style={{right:0 , position:'absolute' , marginRight:20}}
                              source={require('./../../assets/images/chat/chat.png')}></Image>
                          </View>

                    <View >
                                <View style={{flexDirection:'row' , marginLeft:10 , marginTop:10}}>
                                                            <Image 
                                                            style={{marginTop:5
                                                            }}
                                                            source={require('./../../assets/images/reddot/red.png')}></Image>

                                                            <Text style={{marginLeft:10,fontSize:15}}>From Bus Stop</Text>

                                                            <Text style={{marginLeft:10 , right:0 , position:'absolute',fontSize:15 ,marginRight:25}}>Johar Chorangi</Text>
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
                                                    <Text style={{marginLeft:10 ,fontSize:15, right:0 , position:'absolute' ,marginRight:25}}>I.I Chundrigar Road.</Text>
                                            </View> 

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                            
                                                    <Text style={{marginLeft:30}}>Seats Available</Text> 
                                                   <Text style={{marginRight:30, right:0 , position:'absolute'}}>2</Text>
                                            </View>

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Seats No(s)</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>1a,1b</Text>
                                           </View>

                                           <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Time</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>1:00 PM</Text>
                                          </View>

                                          <TouchableOpacity
                        onPress={() => this.openalert()}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>Cancel Booking</Text>
                        </View>
                            
                        </TouchableOpacity>


                    </View>
                    
                             



             </ImageBackground>
             
             
  
                   
  {/*      
        {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
      </View>
    );
    
  render() {
    return (

        <View style={{flex:1}}>
                                   <View style={{flexDirection:'row' , marginTop:30}}>
                                        <TouchableOpacity
                                                onPress={() => this.props.navigation.goBack()}>
                                                                            <Image source={require('./../../assets/images/backbtn/back.png')}
                                                                                    style={styles.burger}>
                    
                                                                            </Image>
                                                                        </TouchableOpacity>

                                                                        <Text style={styles.h1}>50 min Left in Bus leaving</Text>

                            
                                   </View>

                                   
                            <Text style={styles.h2}>You are 20km away from stop</Text>

                            <Text style={styles.ho}>Amount Charged: PKR 150</Text>
                            <Text style={styles.ho}>Booked for Today</Text>
       
                                    <MapView
                                    zoomEnabled={true}
                                                         
                                    showsUserLocation={true}
                                    showsCompass={true}

                                        style={{ flex: 1 }}
                                        initialRegion={{
                                        latitude: 24.8607,
                                        longitude: 67.0011,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                        }}
                                    >
                                    <MapView.Marker
                                    image={require('./../../assets/images/bus/bus.png')}
                                    coordinate={{latitude: 24.8607,
                                        longitude: 67.0011,}}
                                    title={"marker.title"}
                                    description={"desss"}
                                    />
                                    </MapView>

                                    <TouchableOpacity
           onPress = {() => this.openmodal()}
            style={styles.payview1} >
                        <View style={{flexDirection:'row' , flex:1}} >

                                <Text style={styles.payment}>Choose Payment Options</Text>
                            
                            <Image
                            style={{marginTop:15 , right:0 , position:'absolute' , marginRight:15}}
                            source={require('./../../assets/images/duwhite/duwhite.png')}></Image>

                  </View>
            </TouchableOpacity>


                       <Modal
                                    backdropColor={'transparent'}
                                    backdropTransitionOutTiming={0}
                                    isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                                    {this._renderModalContent()}
          
                                 </Modal>

      </View>
    );
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
    fontSize:20 ,
    marginTop:17 ,
    marginLeft:20 ,
  } ,
  ho:{
    fontSize:13 ,
    marginTop:5 ,
    marginLeft:70
  } ,
  h2:{
    fontWeight:'bold',
    fontSize:20 ,
    marginLeft:60 , 
    marginTop:5 ,
  },
  title:{marginLeft:15 ,fontWeight:'100' , fontSize:10},

  stopname:{marginLeft:25 , fontSize:15} ,
  
  seats:{marginTop:10 , marginLeft:25 , fontSize:10} ,
  
  viewstyle:{
    marginLeft:25 ,
    marginRight:25 ,
  padding:2 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  MainContainer:
    {
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      flex: 1,
      padding: 20,
      marginTop:40 
      
    },

 
    selectedItemsButton:
    {
      
      alignSelf:'center' , 
    
      padding: 10,
      marginTop:10 , 
      borderRadius: 5 ,
      borderWidth:2 , 
      backgroundColor: '#FFFFFF',
      borderColor:'#103056'
     
    },
 
    selectedItemsButton_Text:
    {
      color: '#103056',
      textAlign: 'center',
      alignSelf: 'stretch',
      fontSize: 18
    },
 
    checkedView:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
 
    checkBoxImage:
    {
      height: '80%',
      width: '80%',
      tintColor: 'white',
      resizeMode: 'contain'
    },
 
    uncheckedView:
    {
      flex: 1,
      backgroundColor: 'white'
    },
 
    checkBoxLabelText:
    {
      fontSize: 16,
      paddingLeft: 10
    },

    statusBarBackground: {
      height: (Platform.OS === 'ios') ? 18 :Expo.Constants.statusBarHeight, 
       backgroundColor: "#FFFFFF",
    },
    payview1:{width:'100%' , bottom:0 , position:'absolute' ,height:50 , backgroundColor:'#103056'} ,

    payment:{color:'white' , marginLeft:20 , marginTop:15 , fontSize:15} ,
    modalContent: {
        backgroundColor: 'white',
        
        
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },

      payment:{color:'white' , marginLeft:20 , marginTop:15 , fontSize:15}
,
payview:{width:'100%'  ,height:50 , backgroundColor:'#103056'},
tocentertext:{ 
  flex:1 ,
  marginRight:20 ,
  marginLeft:20 ,
  flexDirection:'row' ,
   alignItems: 'center'
, justifyContent: 'space-between'
} ,
loginbtn :{
  marginTop:20,
  marginBottom:10 ,
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
  
    
    