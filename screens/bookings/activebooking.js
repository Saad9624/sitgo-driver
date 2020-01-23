import React, { Component } from 'react';

import { Alert, LayoutAnimation ,Dimensions 
    ,ImageBackground , StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,StatusBar } from 'react-native';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  openalert (){
    Alert.alert(
      'Booking Cancel ',
      'Are you sure want to cancel the ride?',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);

  }

  render() {
    return (
      <View style={styles.parent}>



        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

                  <View style={{flexDirection:'row' ,justifyContent:'center' ,marginLeft:20 , marginRight:20 }}>

                                  <Text style={{left:0 , position:'absolute'}}>{this.props.item.category_Name} </Text>
                                  <Text style={{marginRight:40}}>Hyd</Text>
                                  <Text style={{right:0 , position:'absolute' , marginRight:70}}>Today</Text>
                                  <Image
                                        style={{marginTop:5 ,  right:0 , position:'absolute'}}      
                                              source={require('./../../assets/images/dropdown/drop.png')}
                                            />

                  </View>
       

         
        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>

                {/* <Text> {item.name} </Text> */}

                <ImageBackground 
             style={{width:Dimensions.get('window').width  
               , alignSelf:'center' , marginTop:10 , padding:10}}
             source={require('./../../assets/images/whiteback/whiteback.png')}>

                          <Text style={{marginTop:5 , marginLeft:10}}>Your Driver</Text>

                          <View style={{flexDirection:'row' , marginTop:10 , marginLeft:10}}>
                              <Image source={require('./../../assets/images/placeholder/placeholder.png')}></Image>
                              <Text style={{marginLeft:10 , marginTop:10 , fontSize:15}}>Mushtaq Ahmed</Text>

                              <Image
                              style={{right:0 , position:'absolute' , marginRight:20}}
                              source={require('./../../assets/images/chat/chat.png')}></Image>
                          </View>

                    <View >
                                <View style={{flexDirection:'row' , marginLeft:10 , marginTop:10}}>
                                                            <Image 
                                                            style={{marginTop:5
                                                            }}
                                                            source={require('./../../assets/images/reddot/red.png')}></Image>

                                                            <Text style={{marginLeft:10,fontSize:15}}>From Bus Stop</Text>

                                                            <Text style={{marginLeft:10 , right:0 , position:'absolute',fontSize:15 ,marginRight:25}}>Johar Chorangi</Text>
                                            </View> 

                                            <View style={{flexDirection:'row' ,  marginLeft:10}}>
                                                        <Image
                                                            style={{marginLeft:2  ,marginTop:5}} 
                                                            source={require('./../../assets/images/greydots/grey.png')}></Image>

                                            </View> 
                                        
                                        

                                            <View style={{flexDirection:'row' , marginLeft:10}}>
                                                            <Image 
                                                        
                                                            source={require('./../../assets/images/reddot/red.png')}></Image>

                                                    <Text style={{marginLeft:10 ,fontSize:15}}>Destination Stop</Text>
                                                    <Text style={{marginLeft:10 ,fontSize:15, right:0 , position:'absolute' ,marginRight:25}}>I.I Chundrigar Road.</Text>
                                            </View> 

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                            
                                                    <Text style={{marginLeft:30}}>Seats Available</Text> 
                                                   <Text style={{marginRight:30, right:0 , position:'absolute'}}>2</Text>
                                            </View>

                                            <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Seats No(s)</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>1a,1b</Text>
                                           </View>

                                           <View style={{flexDirection:'row' ,marginTop:10}}>
                                                  
                                                  <Text style={{marginLeft:30}}>Time</Text> 
                                                <Text style={{marginRight:30, right:0 , position:'absolute'}}>1:00 PM</Text>
                                          </View>

                                          <TouchableOpacity
                        onPress={() => this.openalert()}
                        style={styles.loginbtn}>
                        <View style={styles.tocenterview}>
                        <Text style={styles.logintext}>Cancel Booking</Text>
                        </View>
                            
                        </TouchableOpacity>


                    </View>
                    
                             



             </ImageBackground>
             

                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}

export default class activebooking extends Component {


    static navigationOptions ={
        header: null
    }
  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, category_Name: "Karachi", sub_Category: [{ id: 1, name: 'Mi' },]
      },

      {
        expanded: false, category_Name: "Hyderabad", sub_Category: [{ id: 8, name: 'Dell' },]
      },

      {
        expanded: false, category_Name: "Sukkur ", sub_Category: [{ id: 12, name: 'Pendrive' }, ]
      },

    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

<View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#000000'} translucent={true} /> 
      
        

                            <View style={{ flexDirection: 'row', backgroundColor:'#ffffff',height:60 }}>
                                    <TouchableOpacity 
                                        onPress={() => this.props.navigation.goBack()}
                                        >

                                        <Image style={{marginTop:15 ,  marginLeft:25}} source={require('./../../assets/images/backbtn/back.png')}></Image>

                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:20}}>
                                            
                                            <Text style={{fontSize:25 , marginTop:10 , fontWeight:'bold'}}>Active Bookings</Text>
                                     
                                        </View>
                              </View>

                              <View style={{flexDirection:'row' , justifyContent:'space-between' , marginTop:10, marginLeft:25  , marginRight:20}}>

                                <Text style={styles.t1}>From</Text>
                                <Text  style={styles.t1}>To </Text>
                                <Text  style={styles.t1}>Date</Text>
                                <Text ></Text>
                              
                              </View>

        <ScrollView>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor:'#F5F5F5' ,
    justifyContent: 'center',
    //paddingTop: (Platform.OS === 'ios') ? 20 : 0,
   
  },

  iconStyle: {

    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : Expo.Constants.statusBarHeight, 
          backgroundColor: "#FFFFFF",
  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    fontSize: 15,
    padding: 10,
   
  },

  category_View: {
    marginVertical: 5,
    marginTop:20 , 
    
  },
  parent :{
    flex:1 ,
    backgroundColor:'#F5F5F5'
} ,
t1:{color:'#103056' , fontSize:20}
,
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
  alignSelf:'center'
  

} ,
logintext:{
  color:'white' ,
  fontSize:15 , 

  alignItems:'center' , 
  
},
});