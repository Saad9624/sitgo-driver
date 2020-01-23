import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar , Platform ,Dimensions
} from 'react-native';
import * as Font from 'expo-font';

export default class sidedrawer extends React.Component {

    static navigationOptions ={
        header: null
    }

    state = {
      isFocused: false,
      fontLoaded: false,
    };

    async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../assets/fonts/opreg.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }

    
  render() {
    return (
        <View style={styles.parent}>  


            <ImageBackground
                    style={{width:'100%' , height:200}}
                    source={require('./../assets/images/header/header.png')}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MYPROFILE')}>
                    <Image 
                    
                    style={{justifyContent:'center' , marginTop:50 , marginLeft:20}}
                    source={require('./../assets/images/placeholder/placeholder.png')}>
                    </Image>

                    {this.state.fontLoaded ? (      <Text style={{fontFamily:'opreg' ,color:'white' , marginLeft:20 , marginTop:10, fontSize:20}}>Ahsan Khan</Text>) : null }
                    </TouchableOpacity>
                    
           <TouchableOpacity onPress={() => this.props.navigation.navigate('UP')}>
           {this.state.fontLoaded ? (       <Text style={{fontFamily:'opreg' ,color:'black' , marginLeft:20 , marginTop:5, fontSize:15}}>Edit Profile</Text>) : null }
                
           
           </TouchableOpacity>   
            </ImageBackground>

                            

                                <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('AB')}>
                                <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                        <Image style={{marginTop:3}} source={require('./../assets/images/activebooking/ab.png')}></Image>
                                        {this.state.fontLoaded ? (             <Text style={styles.side1}>Active Bookings</Text>) : null }
                                </View>
                                </TouchableOpacity> 
                                
                                <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('BH')}>
                                <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                          <Image style={{marginTop:3}} source={require('./../assets/images/bookinghistory/bh.png')}></Image>
                                          {this.state.fontLoaded ? (              <Text  style={styles.side1}>Booking History</Text>) : null }
                                </View>
                                </TouchableOpacity> 
                               
                              

                               <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('SS')}>
                                        <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                            <Image style={{marginTop:3}} source={require('./../assets/images/payment/payment.png')}></Image>
                                            {this.state.fontLoaded ? (                 <Text  style={styles.side1}>Check Bus Seats</Text> ) : null }

                                    </View>
                               </TouchableOpacity> 

                               <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('FILTER')}>
                                        <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                            <Image style={{marginTop:3}} source={require('./../assets/images/payment/payment.png')}></Image>
                                            {this.state.fontLoaded ? (                 <Text  style={styles.side1}>Apply Filters</Text> ) : null }

                                    </View>
                               </TouchableOpacity> 




                                 <TouchableOpacity>
                               <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                         <Image style={{marginTop:3}} source={require('./../assets/images/notification/noti.png')}></Image>
                                         {this.state.fontLoaded ? (              <Text  style={styles.side1}>Notifications</Text>) : null }
                               </View>
                               </TouchableOpacity> 

                               <TouchableOpacity
                             onPress={() => this.props.navigation.navigate('ROUTES')}>
                                <View style={{flexDirection:'row' , marginTop:10 , padding:10}}>
                                        <Image style={{marginTop:3}} source={require('./../assets/images/activebooking/ab.png')}></Image>
                                        {this.state.fontLoaded ? (             <Text style={styles.side1}>Check Route</Text>) : null }
                                </View>
                                </TouchableOpacity> 
                                
                               

                               <TouchableOpacity style={{bottom:0 , position:'absolute' , width:'100%' , marginBottom:10}}
                             onPress={() => this.props.navigation.navigate('LOGIN')}>
                                <View >
                                            <View  style={styles.viewstyle}  />

                                            <View style={{flexDirection:'row' , marginTop:10 , padding:10, marginBottom:10}}>
                                                      <Image style={{marginTop:3}} source={require('./../assets/images/signout/signout.png')}></Image>
                                                      {this.state.fontLoaded ? (                               <Text  style={styles.side1}>Sign out</Text>) : null }

                                            </View>
                                         
                                </View>
                                </TouchableOpacity>
                                
                               
       
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
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
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
h2:{
    fontWeight:'bold',
    fontSize:25 ,
    marginLeft:50 , 
    marginTop:5 ,
},
title:{marginLeft:15 ,fontWeight:'100' , fontSize:10},

stopname:{marginLeft:25 , fontSize:15} ,

seats:{marginLeft:25 , fontSize:10} ,

viewstyle:{
    alignSelf:'center' , 
    marginLeft:25 ,
    marginRight:25 ,
  padding:2 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
},
tocenterview:{ 
    flex: 1,
     alignItems: 'center'
, justifyContent: 'center'
} ,
loginbtn :{
    marginTop:10,
    height:50 ,
    width:'80%' , 
    marginRight:5 ,
    backgroundColor:'#C62930' ,
    borderRadius:4 ,
    alignSelf:'center' ,
    marginBottom:10
    
    

} ,
logintext:{
    color:'white' ,
    fontSize:15 , 
    fontFamily:'opreg' ,

    alignItems:'center' , 
    
},
side1:{
    marginLeft:12 , 
    fontSize:15 , 
    fontFamily:'opreg' 

},
viewstyle:{
    width:'100%'
   ,opacity:0.2 , 
  padding:2 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
}
   
  });