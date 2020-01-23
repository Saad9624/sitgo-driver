import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar , Platform ,Dimensions
} from 'react-native';

import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';


export default class dashboard extends React.Component {

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

      

     
        <View style={{ flex: 1,flexDirection: 'column',  }}>

        <View style={styles.statusBarBackground}> </View>
                        <StatusBar hidden={false} />
                        <StatusBar barStyle={'light-content'} backgroundColor ={'#E14126'} translucent={false} /> 
        

        <View style={{flexDirection:'row' , marginTop:30}}>
                       <TouchableOpacity
                             onPress={() => this.props.navigation.openDrawer()}>
                                                          <Image source={require('./../assets/images/burger/burger.png')}
                                                                style={styles.burger}>
  
                                                          </Image>
                                                      </TouchableOpacity>

              {this.state.fontLoaded ? (               <Text style={styles.h1}>Good Morning Ahsan,</Text>) : null }
              {this.state.fontLoaded ? (                 <Text  style={{fontFamily:'opreg'}}>Locate Bus</Text> ) : null }
        
        </View>

        {this.state.fontLoaded ? (  <Text style={styles.h2}>Where are you going?</Text>) : null }

         <View>
             <ImageBackground 
             style={{width:Dimensions.get('window').width / 100 * 80 
               , alignSelf:'center' , marginTop:20 , padding:10}}
             source={require('./../assets/images/whiteback/whiteback.png')}>


                                 <View style={{flexDirection:'row'}}>
                                        <Image 
                                        style={{marginTop:5
                                        }}
                                        source={require('./../assets/images/reddot/red.png')}></Image>

{this.state.fontLoaded ? (     <Text style={styles.title}>From Bus Stop</Text>) : null }
                                </View>  

                                <View style={{flexDirection:'row'}}>
                                       <Image
                                          style={{marginLeft:2  ,marginTop:5}} 
                                        source={require('./../assets/images/greydots/grey.png')}></Image>

{this.state.fontLoaded ? (        <Text style={styles.stopname}>Johar Chorangi</Text> ) : null }

                                </View> 
                              
                               

                                <View style={{flexDirection:'row' ,marginTop:5}}>
                                        <Image 
                                     
                                        source={require('./../assets/images/reddot/red.png')}></Image>

{this.state.fontLoaded ? (          <Text style={styles.title}>Destination Bus Stop</Text>) : null }
                                </View>
                                  
   {this.state.fontLoaded ? (      <Text style={styles.stopname}>I.I Chundrigar Road</Text> ) : null }



    {this.state.fontLoaded ? (      <Text style={styles.seats}>Number of Seats Available</Text>) : null }
      {this.state.fontLoaded ? (      <Text style={{marginLeft:25,padding:5}}>2</Text>) : null }
         <View  style={styles.viewstyle}  />


          {this.state.fontLoaded ? (        <Text style={styles.seats}>Booking Date</Text>) : null }
            {this.state.fontLoaded ? (        <Text style={{marginLeft:25,padding:5}}>09-12-2019</Text>) : null }
                                <View  style={styles.viewstyle}  />

                                {this.state.fontLoaded ? (        <Text style={styles.seats}>Time slot</Text>) : null }
                                  {this.state.fontLoaded ? (         <Text style={{marginLeft:25,padding:5}}>1:00 PM</Text>) : null }
                                <View  style={styles.viewstyle}  />




             </ImageBackground>
                                
            
         </View>


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
        height: (Platform.OS === 'ios') ? 18 : 0,
        backgroundColor: "#FF4500",
      },
   burger:{ 
    marginTop:20 ,
    marginLeft:20 ,
    width : 20 , 
    height : 20 , 
   } ,
h1:{
    fontSize:20 ,
    marginTop:17 ,
    marginLeft:20 ,
    fontFamily:'opreg' ,
} ,
h2:{
    fontWeight:'bold',
    fontSize:25 ,
    marginLeft:50 , 
    marginTop:5 ,
    fontFamily:'opreg' ,
},
title:{marginLeft:15 ,fontWeight:'100' , fontSize:10,fontFamily:'opreg' ,},

stopname:{marginLeft:25 , fontSize:15,fontFamily:'opreg' ,} ,

seats:{marginTop:10 , marginLeft:25 , fontSize:10,fontFamily:'opreg' ,} ,

viewstyle:{
    marginLeft:25 ,
    marginRight:25 ,
  padding:2 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
}
   
  });