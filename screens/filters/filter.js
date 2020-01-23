import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar , Platform , Switch 
} from 'react-native';
import * as Font from 'expo-font';
import { Card} from 'react-native-elements'  ;


export default class filter extends React.Component {

    static navigationOptions ={
        header: null
    }

    state = {
        fontLoaded: false,
      };

      async componentDidMount() {
        await Font.loadAsync({
          'opreg': require('./../../assets/fonts/opreg.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }

    
  render() {
    return (
        <View style={{flex:1}}> 
        <View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 
          


                                    <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 }}>
                                        <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()}
                                                        >

                                                        <Image style={{marginTop:15 ,  marginLeft:25}}
                                                         source={require('./../../assets/images/backbtn/back.png')}></Image>

                                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:25}}>
                                        {this.state.fontLoaded ? (  <Text style={{fontSize:25 , marginTop:10 , fontFamily:'opreg'}}>Filters</Text>) : null }
                                     
                                        </View>
                              </View>

                                <View style={{marginRight:20 , marginLeft:20}}>
                                                            {this.state.fontLoaded ? (  <Text style={{fontSize:20,marginTop:2 , color:'#103056', fontFamily:'opreg'}}>View Bookings For</Text>  ) : null }
                        


                                                        <View style={{flexDirection:'row' , marginTop:20}}>
                                                                        <Switch style={{alignSelf:'flex-start'}} />
                                                                    {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:2 , color:'grey', fontFamily:'opreg'}}>Today</Text>  ) : null }
                                                        </View>

                                                        <View style={{flexDirection:'row', marginTop:10}}>
                                                                    <Switch style={{alignSelf:'flex-start'}} />
                                                                    {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:2 , color:'grey', fontFamily:'opreg'}}>Tomorrow</Text>  ) : null }
                                                        </View>

                                                        <View style={{flexDirection:'row', marginTop:10}}>
                                                                <Switch style={{alignSelf:'flex-start'}} />
                                                                    {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:2 , color:'grey', fontFamily:'opreg'}}>Day After Tomorrow</Text>  ) : null }
                                                            </View>
                                        
                                                            {this.state.fontLoaded ? (  <Text style={{fontSize:20,marginTop:10 , color:'#103056', fontFamily:'opreg'}}>View Bookings For</Text>  ) : null }
                                                
                                                <View style={{flexDirection:'row' , marginTop:20}}>
                                                                <Switch style={{alignSelf:'flex-start'}} />
                                                            {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:2 , color:'grey', fontFamily:'opreg'}}>Pay at Stop</Text>  ) : null }
                                                </View>

                                                <View style={{flexDirection:'row', marginTop:10}}>
                                                            <Switch style={{alignSelf:'flex-start'}} />
                                                            {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:2 , color:'grey', fontFamily:'opreg'}}>By Credit Card</Text>  ) : null }
                                                </View>

                                            

                                                {this.state.fontLoaded ? (  <Text style={{fontSize:16,marginTop:20 , color:'#103056', fontFamily:'opreg'}}>Time Slot</Text>  ) : null }
                                             
                                                <Card>

                                                    <Text>1:00 PM</Text>
                                                </Card>

                                </View>
                             
      


      <View style={styles.buttonview}>
      <TouchableOpacity
      //onPress={() => this.props.navigation.navigate('LOGIN')}
      style={styles.loginbtn}>
      <View style={styles.tocenterview}>
      {this.state.fontLoaded ? (  <Text style={styles.logintext}>RESET FILTERS</Text>  ) : null }
      </View>
          
      </TouchableOpacity>

      <TouchableOpacity
    //  onPress={() => this.props.navigation.navigate('SIGNUP')} 
            style={styles.signupbtn}>
            <View style={styles.tocenterview}>
            {this.state.fontLoaded ? ( <Text style={styles.signuptext}>VIEW RESULTS</Text>   ) : null }
            </View>
          
      </TouchableOpacity>
      </View>
            
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
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
      },
    welcome:{
        color:'orange',
        fontSize:25 , 
        marginTop:10 ,
        fontFamily:'opreg' 
    }
    ,
    dummy:{
        marginTop:10  ,
        marginRight:20 , 
        marginLeft:20 ,
        color:'#A0A0A0' ,
        fontSize:15 ,
        fontFamily:'opreg' 
    } ,
    buttonview:{
        bottom:0 ,
        position:'absolute' , 
        marginRight:20 ,
        marginLeft:20 ,
       marginBottom:30 , 
       flexDirection:"row" ,
       justifyContent:'space-evenly' 
    },
    loginbtn :{
        height:50 ,
        flex:1 , 
        marginRight:5 ,
        backgroundColor:'#103056' ,
        borderRadius:5
    } ,

    signupbtn :{
        height:50 ,
        flex:1 , 
        marginLeft:5 , 
         backgroundColor:'#C62930' ,
        borderRadius:5
    },
    logintext:{
        color:'white' ,
        fontSize:15 , 
        fontFamily:'opreg' ,
        alignItems:'center' , 
        
    },
    tocenterview:{ 
        flex: 1,
         alignItems: 'center'
    , justifyContent: 'center'
 } ,
 signuptext:{
    color:'white' ,
    fontSize:15 , 
    fontFamily:'opreg' ,
    alignItems:'center' , 
    
},
   
  });