import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar
} from 'react-native';
import * as Font from 'expo-font';


export default class registration extends React.Component {

    static navigationOptions ={
        header: null
    }

    state = {
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
         <StatusBar backgroundColor="blue" barStyle="light-content" />     
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image 
   
    source={require('./../assets/images/logo/logo.png')}></Image>

        {this.state.fontLoaded ? (
     
        <Text style={styles.welcome}>Welcome to Sitgo</Text>
        ) : null }
         {this.state.fontLoaded ? (
        <Text style={styles.dummy}>Lorem ipsum dolor sit amet,consectur adip sicing elit,sed do eiusmod tempor inciddunt ut , labore et dolore magna aliqua.</Text>
        ) : null }
      
        </View>


      <View style={styles.buttonview}>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('LOGIN')}
      style={styles.loginbtn}>
      <View style={styles.tocenterview}>
      {this.state.fontLoaded ? (  <Text style={styles.logintext}>LOGIN</Text>  ) : null }
      </View>
          
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('SIGNUP')} 
            style={styles.signupbtn}>
            <View style={styles.tocenterview}>
            {this.state.fontLoaded ? ( <Text style={styles.signuptext}>REGISTER</Text>   ) : null }
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