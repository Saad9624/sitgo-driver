import React, { Component } from 'react';
import { View, StatusBar, TextInput, Animated  ,Image , StyleSheet ,TouchableOpacity,
  KeyboardAvoidingView 
,Text} from 'react-native';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    fontLoaded: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

   async componentDidMount() {
        await Font.loadAsync({
          'opreg': require('./../assets/fonts/opreg.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#808080', '#000'],
      }),
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>


    {this.state.fontLoaded ? (     <TextInput
          {...props}
          style={{ width:140 ,  height: 26, fontSize: 20, color: '#000',fontFamily:'opreg' }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        /> ) : null }
      </View>
    );
  }
}

export default class signup extends Component {
  
    static navigationOptions ={
        header: null
    }

    
  state = {
    fname: '',
    lname:'' ,
    email:'' ,
    number:'',
    password:'',
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'opreg': require('./../assets/fonts/opreg.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  handleTextChange = (newText) => this.setState({ fname: newText });
  handleTextChange1 = (newText) => this.setState({ lname: newText });
  handleemail = (newText) => this.setState({ email: newText });
  handlnumber = (newText) => this.setState({ number: newText });
  handlepassword = (newText) => this.setState({ password: newText });

  render() {
    return (
      
      <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
        <ScrollView>
       <KeyboardAvoidingView behavior="position" enabled >
       <StatusBar backgroundColor="blue" barStyle="light-content" /> 
      
       <Image 
    style={styles.logo}
    source={require('./../assets/images/logo/logo.png')}></Image>

{this.state.fontLoaded ? (      <Text style={styles.hello}>Hello, nice to meet you!</Text>  ) : null }
           {this.state.fontLoaded ? (                  <Text style={styles.moving}>Get moving with Sitgo!</Text>   ) : null }

                            <View style={styles.v1}>

                                        <View style={{flexDirection:'column'}}>
                                                    
                                        {this.state.fontLoaded ? (        <FloatingLabelInput
                                        style={{fontFamily:'opreg'}}
                                                        label="First Name"
                                                        value={this.state.fname}
                                                        returnKeyType="next"
                                                        onChangeText={this.handleTextChange}
                                                        />  ) : null }

                                                <View
                                                style={{
                                                  padding:2 ,
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />


                                        </View>


                                    <View style={{flexDirection:'column'}}>

                                                <FloatingLabelInput
                                                label="Last Name"
                                                value={this.state.lname}
                                                onChangeText={this.handleTextChange1}
                                                />

                                                <View
                                                style={{
                                                  padding:2 ,
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />
                                    </View>

                                   

                            </View>

                            <View style={{marginTop:30}}>

                                     <FloatingLabelInput
                                            label="Email"
                                            value={this.state.email}
                                            onChangeText={this.handleemail}
                                            />

                                              <View
                                                style={{
                                                  padding:2 ,
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                }}
                                                />


                            </View>

                            <View style={styles.v2}>

                                              <View style={{flexDirection:'column'}}>
                                                          
                                                          <Text>Mobile</Text>

                                                          <TextInput
                                                          editable={false}>+92</TextInput>
                                                    <View
                                                      style={{
                                                        width:100 ,
                                                        padding:2 ,
                                                          borderBottomColor: 'black',
                                                          borderBottomWidth: 1,
                                                      }}
                                                        />

                                              </View>


                                              <View style={{flexDirection:'column' , marginTop:3}}>

                                                      <FloatingLabelInput
                                                      label="Number"
                                                      keyboardType='numeric'
                                                      value={this.state.number}
                                                      onChangeText={this.handlnumber}
                                                      />

                                                      <View
                                                      style={{
                                                        padding:2 ,
                                                          borderBottomColor: 'black',
                                                          borderBottomWidth: 1,
                                                      }}
                                                        />
                                              </View>

                                             



                                  </View>

                                  <View style={{marginTop:30}}>

                                          <FloatingLabelInput
                                        secureTextEntry={true}
                                                label="Password"
                                                value={this.state.password}
                                                onChangeText={this.handlepassword}
                                                />

                                                  <View
                                                    style={{
                                                      padding:2 ,
                                                        borderBottomColor: 'black',
                                                        borderBottomWidth: 1,
                                                    }}
                                                    />


                                  </View>
                                  </KeyboardAvoidingView>

                                  <View style={{alignItems:'center'}}>
                                    <TouchableOpacity 
                                     onPress={() => this.props.navigation.navigate('OTP')}
                                    style={styles.loginbtn}>
                                    <Text style={styles.logintext}>REGISTER</Text>
                                    </TouchableOpacity>
                                  </View>

                                  
                                  </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   logo:{
       marginTop:50
   },
   hello:{
       marginTop:10 ,
    fontSize:15 ,
    color:'black',
    fontFamily:'opreg' 
}  ,
moving:{
    fontSize:25 ,
    color:'black' ,
    fontWeight:'bold' ,
    fontFamily:'opreg' 
},
v1:{
    marginTop:20 ,
    flexDirection:'row' ,
    justifyContent:'space-between'
} ,
v2:{
  marginTop:30 ,
  flexDirection:'row' ,
  justifyContent:'space-between'
},
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
  width:'50%' , 
  marginRight:5 ,
  backgroundColor:'#C62930' ,
  borderRadius:4 ,
  alignItems:'center',
  justifyContent:'center' ,
  alignContent:'center' ,
  

} ,
logintext:{
  color:'white' ,
  fontSize:15 , 

  alignItems:'center' , 
  
},

tocenterview:{ 
  flex: 1,
   alignItems: 'center'
, justifyContent: 'center'
} ,
   
  });