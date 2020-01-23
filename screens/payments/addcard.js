import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TextInput ,
TouchableOpacity,
Dimensions,
StatusBar,
Keyboard ,Platform ,AsyncStorage
} from 'react-native';



export default class addcard extends React.Component {

    static navigationOptions ={
        header: null
    }
    state= {
        cardnumber:'1111 0000 1111 0000' ,
        date:'',
        cvc:'' ,
        name:'' ,
        width:0 ,
        height:0 ,
        OtpNumber1 :'' ,
        OtpNumber2 :'' ,
        OtpNumber3 :'' ,
        OtpNumber4 :'' ,
          
        };
constructor(props){
    super(props)

    
    

}

    gettingdata= () =>{
         CN = AsyncStorage.getItem("CN") 
         DATE = AsyncStorage.getItem("DATE") 
         CVC = AsyncStorage.getItem("CVC") 
         NAME = AsyncStorage.getItem("NAME") 
      
        if(CN != null || CN != ''){
            this.setState({
                cardnumber : CN  ,
                date :  DATE , 
                cvc: CVC, 
                name : NAME ,
                width : '90%',
                height:220
            })
        }
        else{
            this.setState({
                width:0 ,
                height:0
            })
        }
    
        console.log("width" , this.state.width)
        
    }

    onTextChange = text => {
        this.setState({OtpNumber1 : text});
        if(text.length == 4){
          this.input2.focus()
        }
     }
     onTextChange1 = text => {
      this.setState({OtpNumber2 : text});
      if(text.length == 4){
        this.input3.focus()
      }
   }
   onTextChange2 = text => {
    this.setState({OtpNumber3 : text});
    if(text.length == 4){
      this.input4.focus()
    }
  }
  onTextChange3 = text => {
    this.setState({OtpNumber4 : text});
    if(text.length == 4){
      Keyboard.dismiss()
    }
  }

  

    
  render() {
    return (
        <View style={{flex:1 , backgroundColor:'#E8ECF5'}}>

            

                <View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#FFFFFF'} translucent={true} /> 
          

         
                        <View style={{ flexDirection: 'row', backgroundColor:'#ffffff' ,height:60 }}>
                                        <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()}
                                                        >

                                                        <Image style={{marginTop:15 ,  marginLeft:25}} source={require('./../../assets/images/backbtn/back.png')}></Image>

                                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:25}}>
                                            <Text style={{fontSize:25 , marginTop:10 , fontWeight:'bold'}}>Add Credit Card</Text>
                                     
                                        </View>
                              </View>
          
                      
                                    
                           


                        <ImageBackground 
                        imageStyle={{ borderRadius: 10 }}
                        style={{marginTop:20 ,backgroundColor:'#313131' ,  width:'90%' , alignSelf:'center' , height:220 , marginRight:10 , marginLeft:10}}
                        >

                        <View style={{flexDirection:'column'}}>
                        
                                        
                                        <Image 
                                        style={{left:0 , top:0 , position:'absolute' , padding: 20 , marginLeft:20 , marginTop:20}}
                                        source={require('./../../assets/images/visa/visa.png')}></Image>

                                                <View style={{flexDirection:'row', marginTop:70 , alignSelf:'center'}}>
                                                <TextInput placeholder='XXXX'  ref={input1 => this.input1 = input1} onSubmitEditing={() => this.input2.focus()} textAlign={'center'} onChangeText={this.onTextChange} maxLength={4} keyboardType = 'numeric' style={{fontSize:20, marginRight:5 , color:'white' }} >{this.state.OtpNumber1}</TextInput>
            <TextInput placeholder='XXXX'  ref={input2 => this.input2 = input2} onSubmitEditing={() => this.input3.focus()} textAlign={'center'}  onChangeText={this.onTextChange1} maxLength={4} keyboardType = 'numeric' style={{fontSize:20,marginRight:5 , color:'white'}} >{this.state.OtpNumber2}</TextInput>
            <TextInput placeholder='XXXX' ref={input3 => this.input3 = input3} onSubmitEditing={() => this.input4.focus()} textAlign={'center'}  onChangeText={this.onTextChange2} maxLength={4} keyboardType = 'numeric' style={{fontSize:20,marginRight : 5, color:'white'}} >{this.state.OtpNumber3}</TextInput>
            <TextInput placeholder='XXXX' ref={input4 => this.input4 = input4} textAlign={'center'}  onChangeText={this.onTextChange3}maxLength={4} keyboardType = 'numeric' style={{fontSize:20,alignSelf:'center' ,color:'white'}} >{this.state.OtpNumber4}</TextInput>
     
                                                </View>
                                       
                                            <View style={{flexDirection:'row' , marginTop:10}}>
                                                     <View style={{flexDirection:'column' , marginLeft:20}}>
                                                            <Text style={{color:'white'}}>Month/Year</Text> 
                                                            <TextInput
                                                                placeholder={"00/11"}
                                                            style={{color:'white'}}></TextInput> 
                                                    </View> 

                                                    <View style={{flexDirection:'column' , right:0 ,  position:'absolute' , marginRight:20}}>
                                                            <Text style={{color:'white'}}>CVC</Text> 
                                                            <TextInput
                                                             placeholder={"XXX"}
                                                            style={{color:'white'}}></TextInput> 
                                                    </View> 
                                            
                                            </View>
                                                   

                                       <TextInput 
                                       placeholder={"Card Owner"}
                                       style={{color:'white' , marginTop:20 , marginLeft:20  , fontSize:20}}></TextInput>  


                            </View>
                            
                            </ImageBackground> 

                            <View > 
                                
                            </View>   
        
         
                            <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('CREDITCARD')}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>Save Card Details</Text>
                        </View>
                            
                        </TouchableOpacity> 

        </View>

        
    );
  }
}

const styles = StyleSheet.create({
    parent :{
        flex:1 ,
        backgroundColor:'#E8ECF5', 
    } ,
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
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
        bottom:0,
        position:'absolute' , 
        alignSelf:'center' , 
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