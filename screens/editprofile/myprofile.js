import React from 'react';
import { View, Text , Image , ImageBackground , StyleSheet ,
TouchableOpacity ,StatusBar , Platform
} from 'react-native';
import * as Font from 'expo-font';
import { Card ,Rating} from 'react-native-elements';
import baseurl from '../../components/baseurl';


export default class myprofile extends React.Component {

    static navigationOptions ={
        header: null
    }

    state = {
        fontLoaded: false,
        drivername:'' ,
        joiningdate:'' ,
        trip:0 ,
        image:'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif' , 
        review:0 ,

      };

      async componentDidMount() {
        await Font.loadAsync({
          'opreg': require('./../../assets/fonts/opreg.ttf'),
        });
    
        this.setState({ fontLoaded: true });

        this.get_profile()
      }

      ratingCompleted(rating) {
        console.log("Rating is: " + rating)
      }


      profile_call(){
        const baseUrl = baseurl.uatbaseurl + 'driverlogin/profile?'
        const param = `driverid=1`;
      
        return `${baseUrl}${param}`;
    
     }
    
     get_profile = async () => {
    
        try{
    
           const url = this.profile_call()
           console.log("my profile url" , url)
    
           let response = await fetch(url)
     
    
           const completeresponse =  await response.json()
           console.log("response " , completeresponse)
    
           if(completeresponse.responcecode == '101'){  

            console.log("name" , completeresponse.userdetails.name )

            var user_name = completeresponse.userdetails.name 
            var joining_date =  completeresponse.userdetails.joiningdate 
            var trips =  completeresponse.trips 
            var reviews =  completeresponse.reviews 
            var imageee =  completeresponse.userdetails.image 

            this.setState({
              drivername  : user_name  ,
              joiningdate : joining_date , 
              trip        : trips,
              review      : reviews
            })



                      if(imageee == null || imageee == ''){
                        this.setState({
                          image : 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif' , 
                        })
                      }
                      else{
                        this.setState({
                          image : imageee , 
                        })
                      }
     
           }
           else{

             console.log("under no bus found")
            
         }
          
    
        }
        catch(e){
            console.log(e)
        }
     }
    
  render() {
    let Image_Http_URL ={ uri: this.state.image};
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
                                                                {this.state.fontLoaded ? (  <Text style={{fontSize:25 , marginTop:10 , fontFamily:'opreg'}}>My Profile</Text>) : null }
                                                            
                                                                </View>
                                                </View> 


                                                  
                                                    <View>
                                                                                                                    
                                                                                                                    <Image source={Image_Http_URL} 
                                                                                                                        
                                                                                                                        style={styles.image} />
                                                                      </View>

                                                                    {this.state.fontLoaded ? (  <Text style={styles.welcome}>{this.state.drivername}</Text>  ) : null }
                                                        
                                                                    <View style={{flexDirection:'row' , alignSelf:'center' , marginTop:20}}>
                                                                                {this.state.fontLoaded ? (<Text style={styles.dummy}>Joining Date</Text>  ) : null }            
                                                                                {this.state.fontLoaded ? (<Text style={styles.dummy}>{this.state.joiningdate}</Text>  ) : null }            

                                                                    </View>


                                                                    <View style={{flexDirection:'row' , alignSelf:'center'}}>
                                                                                {this.state.fontLoaded ? (<Text style={styles.dummy}>Total Trips</Text>  ) : null }            
                                                                                {this.state.fontLoaded ? (<Text style={styles.dummy}>{this.state.trip}</Text>  ) : null }            

                                                                    </View>

                                                                    <Card>
                                                                    {this.state.fontLoaded ? (<Text style={styles.dummy1}>Driver's Info</Text>  ) : null }            

                                                                    </Card>
                                                
                                            
                                              

                                                {this.state.fontLoaded ? (<Text style={styles.dummy}>My Ratings</Text>  ) : null }            

                                                    <View style={{flexDirection:'row' , alignSelf:'center', marginTop:10}}>

                                                                  {this.state.fontLoaded ? (<Text style={{color:'grey' , }}>5</Text>  ) : null }     
                                                                <View style={{marginLeft:5 ,marginTop:8, height:6 , backgroundColor:'orange' , width:'40%'}}></View>
                                                                <View style={{marginTop:8, height:6 , backgroundColor:'#103056' , width:'20%'}}></View>
                                                  
                                                    </View>

                                                    <View style={{flexDirection:'row' , alignSelf:'center', marginTop:10}}>

                                                                            {this.state.fontLoaded ? (<Text style={{color:'grey' , }}>4</Text>  ) : null }     
                                                                            <View style={{marginLeft:5 ,marginTop:8, height:6 , backgroundColor:'orange' , width:'40%'}}></View>
                                                                            <View style={{marginTop:8, height:6 , backgroundColor:'#103056' , width:'20%'}}></View>

                                                            </View>

                                                            <View style={{flexDirection:'row' , alignSelf:'center', marginTop:10}}>

                                                                            {this.state.fontLoaded ? (<Text style={{color:'grey' , }}>3</Text>  ) : null }     
                                                                            <View style={{marginLeft:5 ,marginTop:8, height:6 , backgroundColor:'orange' , width:'30%'}}></View>
                                                                            <View style={{marginTop:8, height:6 , backgroundColor:'orange' , width:'30%'}}></View>

                                                            </View>

                                                            <View style={{flexDirection:'row' , alignSelf:'center', marginTop:10}}>

                                                                            {this.state.fontLoaded ? (<Text style={{color:'grey' , }}>2</Text>  ) : null }     
                                                                            <View style={{marginLeft:5 ,marginTop:8, height:6 , backgroundColor:'orange' , width:'20%'}}></View>
                                                                            <View style={{marginTop:8, height:6 , backgroundColor:'#103056' , width:'40%'}}></View>

                                                            </View>

                                                            <View style={{flexDirection:'row' , alignSelf:'center', marginTop:10}}>

                                                                            {this.state.fontLoaded ? (<Text style={{color:'grey' , }}>1</Text>  ) : null }     
                                                                            <View style={{marginLeft:5 ,marginTop:8, height:6 , backgroundColor:'orange' , width:'10%'}}></View>
                                                                            <View style={{marginTop:8, height:6 , backgroundColor:'#103056' , width:'50%'}}></View>

                                                            </View>

                                                            <Rating
                                                             
                                                             ratingColor='#3498db'
                                                             ratingBackgroundColor='#c8c7c8'
                                                            ratingTextColor='#103056'
                                                            type='custom'
                                                            
                                                                type='star'
                                                                ratingCount={this.state.review}
                                                                imageSize={40}
                                                                showRating
                                                                onFinishRating={this.ratingCompleted}
                                                                />
     
            
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
        alignSelf:'center' , 
        color:'orange',
        fontSize:25 , 
        marginTop:10 ,
        fontFamily:'opreg' 
    },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
              backgroundColor: "#FFFFFF",
      },
    dummy:{
        alignSelf:'center' ,
        marginTop:10  ,
        marginRight:20 , 
        marginLeft:20 ,
        color:'#A0A0A0' ,
        fontSize:15 ,
        fontFamily:'opreg' 
    } ,
    dummy1:{
        alignSelf:'center' ,
        marginTop:10  ,
        marginRight:20 , 
        marginLeft:20 ,
        color:'#103056' ,
        fontSize:20 ,
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
image: {
  alignSelf:'center' , 
  height: 100,
  width: 100,
  borderRadius: 50,
},
container: {
  flex: 1,
},
   
  });