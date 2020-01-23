import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TextInput ,
TouchableOpacity,
Dimensions,
StatusBar,
AsyncStorage
} from 'react-native';
import Loading from 'react-native-whc-loading' ;
import baseurl from '../components/baseurl' ;
export default class registration extends React.Component {

    static navigationOptions ={
        header: null
    }

    state={
        number :'' ,
        password: '' ,

    }

    number_on_text_change = (newText) => this.setState({ number: newText });
    password_on_text_change = (newText) => this.setState({ password: newText });


    
    check_if_empty = async () =>{
        this.refs.loading2.show() ;

        this.LOGIN_SERVICE()

        // if(this.state.number != '' && this.state.password != ''){
                 
        //     this.LOGIN_SERVICE(this.state.number , this.state.password)
        // }
        // else{
        //     this.refs.loading2.close() ;
        //         alert("Fields cannot be empty")
        // }
    
    }

    // LOGIN_SERVICE = async (num , pass) => {

        LOGIN_SERVICE = async () => {
        // console.log('num :', num) ;
        // console.log('pass :', pass) ;
      
        try{
        
            console.log("try" , "under try")
    
            var details = {
                   
            //  "phone" : '92' + num  ,
            //   "password"  : pass   ,

              
              "phone" : '923000123456' ,
              "password"  : 'hassankk123'   ,
              
     };
     
     var formBody = [];
     for (var property in details) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(details[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
      formBody = formBody.join("&");
    
    
          fetch(baseurl.uatbaseurl + 'driverlogin/user',
          {
           
            method: 'POST',
               headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
            
    
            body: formBody
      
           })
       
       
    
           .then((response) => response.json())
           
                  .then((responseJson) => {
                   
                       console.log('response object: ',responseJson)
                     
    
    
                       if(responseJson.responcecode == '002' ){
                        this.refs.loading2.close() ;
                        this.regcode(responseJson.message , responseJson.userdetails.activationcode)
                      }
                      else if(responseJson.responcecode == '001' ){
                        this.refs.loading2.close() ;
                         AsyncStorage.setItem("UN" ,responseJson.userdetails.name )
                         AsyncStorage.setItem("EMAIL" ,responseJson.userdetails.email )
                         AsyncStorage.setItem("USERID" ,responseJson.userdetails.driverid )
                         AsyncStorage.setItem("BUSID" ,responseJson.userdetails.busid )
                         AsyncStorage.setItem('isLoginin' ,"yes" )

                         console.log("isloginchecking" , AsyncStorage.getItem("isLoginin"))

                        this.props.navigation.navigate('MAP' , {
                            USERNAME: responseJson.userdetails.name  ,
                            EMAIL :responseJson.userdetails.email 
                        })
                      }
                      else{
                        this.refs.loading2.close() ;
                        alert(responseJson.message)
                      }
                  })
                  .catch((error) => {
                    this.refs.loading2.close() ;
                  console.error(error);
                  });
    
          
        }
        catch(e){
          this.refs.loading2.close() ;
         
          console.log("catch" , e)
          
        }
    
    
    
    } 
    
  render() {
    return (
        <View style={styles.parent}>  
        
        <StatusBar backgroundColor="blue" barStyle="light-content" /> 
                    <View style={styles.tocenterview}>
                            <Image 
                               source={require('./../assets/images/logo/logo.png')}></Image>


                            <Text style={styles.hello}>Hello, nice to meet you!</Text>
                            <Text style={styles.moving}>Get moving with Sitgo!</Text>
                            <View   style={styles.et1}>
                                    <View style={styles.tocentertext}>
                                        <Text >+92</Text>
                                        <TextInput
                                         maxLength={11}
                                        keyboardType='numeric'
                                        value={this.state.number}
                                        onChangeText={this.number_on_text_change}
                                        placeholder='300-1234567'>
                                            
                                        </TextInput>
                                        <Text style={{color:'white'}} >1</Text>
                                    </View>
                     
                            </View>

                            <View style={styles.et2 }>
                                    <View style={{alignSelf:'center' , justifyContent:'center' , alignItems:'center' , alignContent:'center'}}>
                                 
                                            <TextInput
                                            style={{alignSelf:'center'}}
                                            value={this.state.password}
                                            onChangeText={this.password_on_text_change}
                                            secureTextEntry={true}
                                            placeholder='Enter password'>
                                                
                                            </TextInput>
                                            </View>
                            </View>

                            <TouchableOpacity
                           onPress={() => this.check_if_empty()}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>LOGIN</Text>
                        </View>
                            
                        </TouchableOpacity> 
                    </View>  

                    <Loading ref='loading2'/>
        </View>

        
    );
  }
}

const styles = StyleSheet.create({
    parent :{
        flex:1 ,
        backgroundColor:'#E8ECF5',
        
    } ,
    tocenterview:{ 
        flex: 1,
         alignItems: 'center'
    , justifyContent: 'center'
 } ,
 hello:{
     marginTop:20 ,
     fontSize:15 ,
     color:'black'
 }  ,
 moving:{
     fontSize:25 ,
     color:'black' ,
     fontWeight:'bold' ,
 },
 et1:{
     borderColor:'#d3d3d3' , 
     borderRadius:5,
     backgroundColor:'white' ,
     height:70 ,
     marginTop:20 ,
     borderWidth:1 ,
     width: '90%',
     marginRight:40 ,
     marginLeft:40
 },
 et2:{
    borderColor:'#d3d3d3' , 
    borderRadius:5,
    backgroundColor:'white' ,
    height:70 ,
    marginTop:10 ,
    borderWidth:1 ,
    width: '90%',
    justifyContent:'center'
},
ext:{
    justifyContent:'center' ,
    color:'black' ,
        fontSize:15 , 
       alignItems:'center' , 
        
    
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
logintext:{
    color:'white' ,
    fontSize:15 , 
 
    alignItems:'center' , 
    
},
  
   
  });