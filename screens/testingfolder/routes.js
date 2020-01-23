import React, { Component } from 'react';

import MapView, { Callout, Marker, Polygon } from 'react-native-maps';
import { View , Text, Button , NetInfo, Image ,
    Alert ,  TouchableOpacity,ImageBackground , StyleSheet , Share ,StatusBar ,
    Dimensions  ,
     ActivityIndicator , Platform} from 'react-native';
     import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');

export default class routes extends Component {
    static navigationOptions = {
        header:  null
    }

        
       
   
       openmodal = () =>{
         this.setState({
           visibleModal : 5
         })
       }
     
       


constructor() {
super();

this.state = {
    visibleModal: null,
region: {
latitude: 24.86818166,
longitude: 67.03036934,
latitudeDelta: 0.009,
longitudeDelta: 0.009 ,
},

polygons: [
{
coordinates: [
{ latitude: 24.8661959, longitude: 67.03093261 },
{ latitude: 24.86805025, longitude: 67.02993482 },



],
open: false,
},
// {
// coordinates: [
// { latitude: 24.86719852, longitude: 67.03043371 },
// { latitude: 24.86898471, longitude: 67.03331977},
// ],
// open: false,
// },
// {
// coordinates: [


// ],
// open: false,
// },
],
polygons1: [
    
    {
        coordinates: [
        { latitude: 24.8703718, longitude: 67.03359872 },
        { latitude:24.86813786, longitude: 67.02988118 },
        ],
        open: false,
        },
    ],

};
}

toggle(polygon) {
console.log('onPress', polygon.open);

if (polygon.open) {
polygon.marker.hideCallout();
} else {
polygon.marker.showCallout();
}

polygon.open = !polygon.open;
}

render() {
return (
<View style={styles.container}>
<View style={{flexDirection:'row' , marginTop:30}}>
                                        <TouchableOpacity
                                                onPress={() => this.props.navigation.goBack()}>
                                                                            <Image source={require('./../../assets/images/backbtn/back.png')}
                                                                                    style={styles.burger}>
                    
                                                                            </Image>
                                                                        </TouchableOpacity>

                                                                        <Text style={styles.h1}>Good Morning Captain,</Text>

                            
                                   </View>

                        
                            <Text style={styles.ho}>You will be at your next stop 00:15 Hr</Text>


<MapView 
zoomEnabled={true}
                                                         
showsUserLocation={true}
showsCompass={true}
style={styles.map} initialRegion={this.state.region}>
{this.state.polygons.map((polygon, index) => (
<View key={index}>
<Polygon
coordinates={polygon.coordinates}
onPress={() => this.toggle(polygon)}
/>
<Marker
    image={require('./../../assets/images/bus/bus.png')}
ref={ref => polygon.marker = ref}
coordinate={polygon.coordinates[0]}>
<Callout>
<Text>Driver Location!</Text>
</Callout>
</Marker>
</View>
))}
{this.state.polygons1.map((polygon, index) => (
    <View key={index}>
    <Polygon
    coordinates={polygon.coordinates}
    onPress={() => this.toggle(polygon)}
    />
    <Marker

    ref={ref => polygon.marker = ref}
    coordinate={polygon.coordinates[0]}>
    <Callout>
    <Text>Drop off location!</Text>
    </Callout>
    </Marker>
    </View>
    ))}

{this.state.polygons1.map((polygon, index) => (
    <View key={index}>
    <Polygon
    coordinates={polygon.coordinates}
    onPress={() => this.toggle(polygon)}
    />
    <Marker

    ref={ref => polygon.marker = ref}
    coordinate={polygon.coordinates[0]}>
    <Callout>
    <Text>Drop off location!</Text>
    </Callout>
    </Marker>
    </View>
    ))}
    
</MapView>

                  
</View>
);
}
}

const styles = {
container: {
alignItems: 'stretch',
flex: 1,
},
map: {
flex: 1,
},
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
height : 20 ,  } ,
h1:{
fontSize:20 ,
marginTop:17 ,
marginLeft:20 ,
} ,
ho:{
fontSize:13 ,
marginTop:5 ,
marginLeft:70
} ,
h2:{
fontWeight:'bold',
fontSize:20 ,
marginLeft:60 , 
marginTop:5 ,
},
title:{marginLeft:15 ,fontWeight:'100' , fontSize:10},

stopname:{marginLeft:25 , fontSize:15} ,

seats:{marginTop:10 , marginLeft:25 , fontSize:10} ,

viewstyle:{
marginLeft:25 ,
marginRight:25 ,
padding:2 ,
borderBottomColor: 'black',
borderBottomWidth: 1,
},
MainContainer:
{
  paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  flex: 1,
  padding: 20,
  marginTop:40 
  
},


selectedItemsButton:
{
  
  alignSelf:'center' , 

  padding: 10,
  marginTop:10 , 
  borderRadius: 5 ,
  borderWidth:2 , 
  backgroundColor: '#FFFFFF',
  borderColor:'#103056'
 
},

selectedItemsButton_Text:
{
  color: '#103056',
  textAlign: 'center',
  alignSelf: 'stretch',
  fontSize: 18
},

checkedView:
{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

checkBoxImage:
{
  height: '80%',
  width: '80%',
  tintColor: 'white',
  resizeMode: 'contain'
},

uncheckedView:
{
  flex: 1,
  backgroundColor: 'white'
},

checkBoxLabelText:
{
  fontSize: 16,
  paddingLeft: 10
},

statusBarBackground: {
  height: (Platform.OS === 'ios') ? 18 :Expo.Constants.statusBarHeight, 
   backgroundColor: "#FFFFFF",
},
payview1:{width:'100%' , bottom:0 , position:'absolute' ,height:50 , backgroundColor:'#103056'} ,

payment:{color:'white' , marginLeft:20 , marginTop:15 , fontSize:15} ,
modalContent: {
    backgroundColor: 'white',
    
    
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  payment:{color:'white' , marginLeft:20 , marginTop:15 , fontSize:15}
,
payview:{width:'100%'  ,height:50 , backgroundColor:'#103056'},
tocentertext:{ 
flex:1 ,
marginRight:20 ,
marginLeft:20 ,
flexDirection:'row' ,
alignItems: 'center'
, justifyContent: 'space-between'
} ,
loginbtn :{
marginTop:20,
marginBottom:10 ,
height:50 ,
width:'40%' , 
marginRight:5 ,
backgroundColor:'#103056' ,
borderRadius:4 ,
alignItems:'center',
justifyContent:'center' ,
alignContent:'center' ,
alignSelf:'center'


} ,
logintext:{
color:'white' ,
fontSize:15 , 

alignItems:'center' , 

},
};