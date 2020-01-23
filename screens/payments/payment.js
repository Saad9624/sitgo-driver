import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TextInput ,
TouchableOpacity,
Dimensions,
StatusBar,
Keyboard ,Platform ,AsyncStorage
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';



export default class payment extends React.Component {

    static navigationOptions ={
        header: null
    }
constructor(props){
    super(props)

    this.state= {
        cardnumber:'1111 0000 1111 0000' ,
        date:'',
        cvc:'' ,
        name:'' ,
        width:0 ,
        height:0 ,
          
        };
    

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

  

    
  render() {

    let data = [{
        value: '**** **** **** 5467',
      }, {
        value: '**** **** **** 0000',
      }, {
        value: '**** **** **** 1111',
      },
      ];

      let data1 = [{
        value: 'Credit Card',
      }, {
        value: 'Cash on Delivery',
      }, 
      ];
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
                                            <Text style={{fontSize:25 , marginTop:10 , fontWeight:'bold'}}>Payments</Text>
                                     
                                        </View>
                              </View>
          
                      
                                   


                             <View  style={{marginLeft:25 , marginTop:20 , marginRight:25}}> 
                             <Text style={{  color:'black' , fontSize:20}}>Default Credit Card</Text>

                             <Dropdown 
                             label='Select Card'
                             inputContainerStyle={{ padding:10 , borderBottomColor: 'transparent' ,backgroundColor:'white' ,borderRadius:5 ,marginTop:10  }}
                                                                              // onChangeText={cadType => this.setState({cadType})}
                                                                               data={data}>
                                                                            
                                                                            </Dropdown>
                                                                            <Text style={{ marginTop:20 , color:'black' , fontSize:20}}>Default Payment Options</Text>
                            
                                                                            <Dropdown
                                                                            inputContainerStyle={{marginTop:10  ,borderBottomColor: 'transparent' ,backgroundColor:'white' , borderRadius:5 }} 
                                                                            label='Select Method'
                                                                              // onChangeText={cadType => this.setState({cadType})}
                                                                               data={data1}>
                                                                            
                                                                            </Dropdown>

                            </View>   
        
         
                            <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ADDCARD')}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>Add New Credit Card</Text>
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
        padding:10 , 
        bottom:0,
        position:'absolute' , 
        alignSelf:'center' , 
        marginTop:80,
        marginBottom:40 ,
        borderColor:'#103056' , 
        borderWidth:1 , 
        borderRadius:5, 
        height:50 ,
        width:'60%' , 
        marginRight:5 ,
        backgroundColor:'#FFFFFF' ,
        borderRadius:4 ,
        alignItems:'center',
        justifyContent:'center' ,
        alignContent:'center' ,
        
    
    } ,
    logintext:{
        color:'#103056' ,
        fontSize:15 , 
     
        alignItems:'center' , 
        
    },
    tocenterview:{ 
        flex: 1,
         alignItems: 'center'
    , justifyContent: 'center'
 } ,

   
  });