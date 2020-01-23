import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TextInput ,
TouchableOpacity,
Dimensions,
StatusBar,
Keyboard
} from 'react-native';
import * as Font from 'expo-font';

export default class otp extends React.Component {

    static navigationOptions ={
        header: null
    }

    state= {
        CardNumber : '' ,
        MobileNumber : '',
        OtpNumber1 :'' ,
        OtpNumber2 :'' ,
        OtpNumber3 :'' ,
        OtpNumber4 :'' ,
        fontLoaded: false,
      
    };
    async componentDidMount() {
      await Font.loadAsync({
        'opreg': require('./../assets/fonts/opreg.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }
    onTextChange = text => {
        this.setState({OtpNumber1 : text});
        if(text.length == 1){
          this.input2.focus()
        }
     }
     onTextChange1 = text => {
      this.setState({OtpNumber2 : text});
      if(text.length == 1){
        this.input3.focus()
      }
   }
   onTextChange2 = text => {
    this.setState({OtpNumber3 : text});
    if(text.length == 1){
      this.input4.focus()
    }
  }
  onTextChange3 = text => {
    this.setState({OtpNumber4 : text});
    if(text.length == 1){
      Keyboard.dismiss()
    }
  }

    
  render() {
    return (
        <View style={{flex:1 , backgroundColor:'#E8ECF5'}}>
<Image 
   style={{alignSelf:'center', marginTop:100}}
   source={require('./../assets/images/logo/logo.png')}></Image>
          
                    <View style={styles.bottmcontainer}> 
                    {this.state.fontLoaded ? (        <Text style={styles.t1}>Phone Verification</Text>) : null }
                      {this.state.fontLoaded ? (         <Text style={styles.t2}>Enter your OTP code below</Text>) : null }

                            <View style={styles.v1}>
                            <View style={{alignSelf:'center',flexDirection:'row' ,marginTop:20}}>

                            <TextInput secureTextEntry={true} ref={input1 => this.input1 = input1} onSubmitEditing={() => this.input2.focus()} textAlign={'center'} onChangeText={this.onTextChange} maxLength={1} keyboardType = 'numeric' style={{width: 62.5,borderBottomColor:'#FF4500' , borderBottomWidth : 1 , marginRight:5 }} >{this.state.OtpNumber1}</TextInput>
            <TextInput  secureTextEntry={true} ref={input2 => this.input2 = input2} onSubmitEditing={() => this.input3.focus()} textAlign={'center'}  onChangeText={this.onTextChange1} maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'#FF4500' , borderBottomWidth : 1  , marginRight:5 , alignSelf:'center'}} >{this.state.OtpNumber2}</TextInput>
            <TextInput secureTextEntry={true}  ref={input3 => this.input3 = input3} onSubmitEditing={() => this.input4.focus()} textAlign={'center'}  onChangeText={this.onTextChange2} maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'#FF4500' , borderBottomWidth : 1  , marginRight : 5 , alignSelf:'center'}} >{this.state.OtpNumber3}</TextInput>
            <TextInput secureTextEntry={true}  ref={input4 => this.input4 = input4} textAlign={'center'}  onChangeText={this.onTextChange3}maxLength={1} keyboardType = 'numeric' style={{width: 62.5 ,borderBottomColor:'#FF4500' , borderBottomWidth : 1  , alignSelf:'center'}} >{this.state.OtpNumber4}</TextInput>
     
           
                           
                            </View>
                           

                           
                           
                            </View>

                            {this.state.fontLoaded ? (     <Text style={styles.t3}>Resend Code in 10 seconds</Text>) : null }


                            <TouchableOpacity
                            style={{borderColor:'#103056' , marginLeft:10 , marginTop:100, borderRadius:4 , height:50  , backgroundColor:'#103056'}}
                            onPress={() => this.props.navigation.navigate('MAP')} >
                  {this.state.fontLoaded ? (             <Text style={{fontFamily:'opreg' ,color:'white' , alignItems:'center' , fontSize:20 , alignSelf:'center' , marginTop:10 , justifyContent:'center'}}>Next</Text>) : null }


                            </TouchableOpacity>

                    </View>
        </View>

        
    );
  }
}

const styles = StyleSheet.create({
    parent :{
        flex:1 ,
        backgroundColor:'#E8ECF5', 
    } ,
bottmcontainer:{
    marginLeft:20 ,
     marginRight:20 ,
     bottom:0 , 
     position :'absolute' ,
flex:1 ,
marginBottom:100
},
t1:{
    fontSize:15 ,
    fontWeight:'600' ,
    fontFamily:'opreg' 
} ,
t2:{
    fontSize:25 ,
    fontWeight:'800' ,
    fontFamily:'opreg' 
},
v1:{
    marginLeft:10 , 
    marginTop:20 , 
    borderColor:'#d3d3d3' ,
    backgroundColor:'white',
    borderRadius:5 ,
    borderWidth:1 ,
    height:70 ,
    width:'100%',
    alignSelf:'center'
},
t3:{
    marginTop:40 , 
    fontSize:15 ,
    fontWeight:'200' ,
    fontFamily:'opreg' 
} ,
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
    

} ,
   
  });