import { Alert, Image, Platform, StyleSheet, Text, TouchableHighlight,TouchableOpacity, View ,StatusBar } from 'react-native';
 import React from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { BackHandler } from 'react-native';

 
class Selected_Items_Array {
  constructor() {
    selectedItemsArray = [];
  }
 
  pushItem(option) {
    selectedItemsArray.push(option);
  }
 
  getArray() {
    return selectedItemsArray;
  }
}
 
class Checkbox extends React.Component {
 
  constructor() {
 
    super();
 
    this.state = { checked: null }
  }
 
  componentWillMount() {
 
    if (this.props.checked) {
      this.setState({ checked: true }, () => {
        this.props.selectedArrayObject.pushItem({
          'key': this.props.keyValue,
          'label': this.props.label,
          'value': this.props.value
        });
      });
    }
    else {
      this.setState({ checked: false });
    }
  }
 
  toggleState(key, label, value) {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.selectedArrayObject.pushItem({ 'key': key, 'label': label, 'value': value });
      }
      else {
        this.props.selectedArrayObject.getArray().splice(this.props.selectedArrayObject.getArray().findIndex(x => x.key == key), 1);
      }
    });
  }
 
  render() {
    return (
 
      <TouchableHighlight
        onPress={this.toggleState.bind(this, this.props.keyValue, this.props.label, this.props.value)}
        underlayColor="transparent"
        style={{ marginVertical: 10 }}>
 
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
 
          <View style={{ width: this.props.size, height: this.props.size, backgroundColor: this.props.color, padding: 3 }}>
            {
              (this.state.checked)
                ?
                (<View style={styles.checkedView}>
                  <Image source={require('./../../assets/check.png')} style={styles.checkBoxImage} />
                </View>)
                :
                (<View style={styles.uncheckedView} />)
            }
 
          </View>
 
          <Text style={[styles.checkBoxLabelText, { color: this.props.labelColor }]}>{this.props.label}</Text>
 
        </View>
 
      </TouchableHighlight>
    );
  }
}
 
export default class selectseats extends React.Component {

    static navigationOptions ={
        header: null
    }
 
  constructor() {
 
    super();
 
    selectedArrayOBJ = new Selected_Items_Array();
    this.state = {
       selectedItems: '' 
    , select:'' ,
      visibleModal: null,
      
}
 
  }



 
  getSelectedItems = () => {
 
    if (selectedArrayOBJ.getArray().length == 0) {
 
      Alert.alert('No Items Selected!');
    }
    else {
      this.setState({
        select:'You have selected'
      })
      // console.log(selectedArrayOBJ.getArray().map(item => item.label).join());
      this.setState(() => {
        return {
          selectedItems: selectedArrayOBJ.getArray().map(item => item.value).join()
        }
      });
    }
  }

  openmodal = () =>{
    this.setState({
      visibleModal : 5
    })
  }

  closemodal = () =>{
    this.setState({
      visibleModal: null
    })
  }

  locatebus =() =>{
    this.setState({
      visibleModal: null
    })
    this.props.navigation.navigate('ROUTES')

  }

  gotopayment = () => {
    this.setState({
      visibleModal: null
    })
    this.props.navigation.navigate('PAYMENT')
  }

  // _renderButton = (text, onPress) => (
  //   <TouchableOpacity onPress={onPress}>
  //     <View style={styles.button}>
  //       <Text>{text}</Text>
        
  //     </View>
  //   </TouchableOpacity>
  // );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
  
                <View   style={styles.payview} > 

                            <View style={{flexDirection:'row' , flex:1}} >

                                      <Text style={styles.payment}>Choose Payment Options</Text>

                                      <TouchableOpacity 
                                          style={{right:0 , position:'absolute' }}
                                       onPress = {() => this.closemodal()} >
                                              <Image
                                              style={{marginTop:15  , marginRight:15}}
                                              source={require('./../../assets/images/ddwhite/ddwhite.png')}></Image>
                                        </TouchableOpacity>

                              </View>

                  </View>

                  <TouchableOpacity onPress={() => this.locatebus()}>
                       <Text style={{fontSize:15 , color:'#103056', padding:15}}>Pay on Arrival</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={() =>this.gotopayment() }>
                       <Text style={{fontSize:15 , color:'#103056', padding:15}}>Pay through Credit Card</Text>
                  </TouchableOpacity>
{/*      
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))} */}
    </View>
  );
 
  render() {
    return (

      <View style={styles.parent}>
      

      <View style={styles.statusBarBackground}></View>
                <StatusBar hidden={false} />
                        <StatusBar barStyle={'dark-content'} backgroundColor ={'#000000'} translucent={true} /> 

                        <View style={{ flexDirection: 'row' , backgroundColor:'#ffffff' ,height:60}}>
                                        <TouchableOpacity 
                                                        onPress={() => this.props.navigation.goBack()}
                                                        >

                                                        <Image style={{marginTop:15 ,  marginLeft:25}} source={require('./../../assets/images/backbtn/back.png')}></Image>

                                                        </TouchableOpacity>

                                        <View style={{flexDirection:'column' , marginLeft:20}}>
                                            <Text style={{fontSize:15}}>Booking Time Left</Text>
                                            <Text  style={{fontSize:20 , fontWeight:'500'}}>00 Hr 25 Min 18 Sec</Text>
                                        </View>
                              </View>
 
        <View style={{flexDirection:'column' , marginRight:10 , marginLeft:10 , borderColor:'grey' ,padding:5 ,borderRadius:5, borderWidth:1 , marginTop:20}}>
          
                        <View style={{flexDirection:'row' , height:50}}>

                                <View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
                                            
                                            <Checkbox size={30}
                                                      keyValue={1}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      
                                                      label="1a" 
                                                      value="1a" />

                                                      <Text style={{color:'white'}}>a</Text>

                                                  <Checkbox
                                                    style={{marginLeft:5}}
                                                    size={30}
                                                      keyValue={2}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      label="1b"
                                                      value="1b" />
                                    
                                    </View>


                                <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
                                    
                                              <Checkbox size={30}
                                                        keyValue={3}
                                                        selectedArrayObject={selectedArrayOBJ}
                                                        checked={false}
                                                        color="#d3d3d3"
                                                      labelColor="black"
                                                        label="1c"
                                                        value="1c" />

                                                        <Text style={{color:'white'}}>a</Text>

                                                    <Checkbox
                                                      style={{marginLeft:5}}
                                                      size={30}
                                                        keyValue={4}
                                                        selectedArrayObject={selectedArrayOBJ}
                                                        checked={false}
                                                        color="#d3d3d3"
                                                        labelColor="black"
                                                        label="1d"
                                                        value="1d" />
                                      
                                      </View>

                        </View>

                        <View style={{flexDirection:'row' , height:50}}>

                        <View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
                                    
                                    <Checkbox size={30}
                                              keyValue={5}
                                              selectedArrayObject={selectedArrayOBJ}
                                              checked={false}
                                              color="#d3d3d3"
                                              labelColor="black"
                                              label="2a"
                                              value="2a" />

                                              <Text style={{color:'white'}}>a</Text>

                                          <Checkbox
                                            style={{marginLeft:5}}
                                            size={30}
                                              keyValue={6}
                                              selectedArrayObject={selectedArrayOBJ}
                                              checked={false}
                                              color="#d3d3d3"
                                              labelColor="black"
                                              label="2b"
                                              value="2b" />
                            
                            </View>


                        <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
                            
                                      <Checkbox size={30}
                                                keyValue={7}
                                                selectedArrayObject={selectedArrayOBJ}
                                                checked={false}
                                                color="#d3d3d3"
                                                labelColor="black"
                                                label="2c"
                                                value="2c" />

                                                <Text style={{color:'white'}}>a</Text>

                                            <Checkbox
                                              style={{marginLeft:5}}
                                              size={30}
                                                keyValue={8}
                                                selectedArrayObject={selectedArrayOBJ}
                                                checked={false}
                                                color="#d3d3d3"
                                                      labelColor="black"
                                                label="2d"
                                                value="2d" />
                              
                              </View>

</View>

                        <View style={{flexDirection:'row' , height:50}}>

                                <View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
                                            
                                            <Checkbox size={30}
                                                      keyValue={8}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      label="3a"
                                                      value="3a" />

                                                      <Text style={{color:'white'}}>a</Text>

                                                  <Checkbox
                                                    style={{marginLeft:5}}
                                                    size={30}
                                                      keyValue={9}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      label="3b"
                                                      value="3b" />
                                    
                                    </View>


                                      <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
                                          
                                                    <Checkbox size={30}
                                                              keyValue={10}
                                                              selectedArrayObject={selectedArrayOBJ}
                                                              checked={false}
                                                              color="#d3d3d3"
                                                              labelColor="black"
                                                              label="3c"
                                                              value="3c" />

                                                              <Text style={{color:'white'}}>a</Text>

                                                          <Checkbox
                                                            style={{marginLeft:5}}
                                                            size={30}
                                                              keyValue={11}
                                                              selectedArrayObject={selectedArrayOBJ}
                                                              checked={false}
                                                              color="#d3d3d3"
                                                              labelColor="black"
                                                              label="3d"
                                                              value="3d" />
                                            
                                            </View>

</View>

                        
                        <View style={{flexDirection:'row' , height:50}}>



                              <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
                                  
                                            <Checkbox size={30}
                                                      keyValue={13}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      label="4a"
                                                      value="4a" />

                                                      <Text style={{color:'white'}}>a</Text>

                                                  <Checkbox
                                                    style={{marginLeft:5}}
                                                    size={30}
                                                      keyValue={14}
                                                      selectedArrayObject={selectedArrayOBJ}
                                                      checked={false}
                                                      color="#d3d3d3"
                                                      labelColor="black"
                                                      label="4b"
                                                      value="4b" />
                                    
                                    </View>

                        </View>

                        <View style={{flexDirection:'row' , height:50}}>

<View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
            
            <Checkbox size={30}
                      keyValue={15}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="5a"
                      value="5a" />

                      <Text style={{color:'white'}}>a</Text>

                  <Checkbox
                    style={{marginLeft:5}}
                    size={30}
                      keyValue={16}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="5b"
                      value="5b" />
    
    </View>


<View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
    
              <Checkbox size={30}
                        keyValue={17}
                        selectedArrayObject={selectedArrayOBJ}
                        checked={false}
                        color="#d3d3d3"
                        labelColor="black"
                        label="5c"
                        value="5c" />

                        <Text style={{color:'white'}}>a</Text>

                    <Checkbox
                      style={{marginLeft:5}}
                      size={30}
                        keyValue={18}
                        selectedArrayObject={selectedArrayOBJ}
                        checked={false}
                        color="#d3d3d3"
                        labelColor="black"
                        label="5d"
                        value="5d" />
      
      </View>

</View>

                        <View style={{flexDirection:'row' , height:50}}>

                        <View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
                            
                            <Checkbox size={30}
                                      keyValue={19}
                                      selectedArrayObject={selectedArrayOBJ}
                                      checked={false}
                                      color="#d3d3d3"
                                      labelColor="black"
                                      label="6a"
                                      value="6a" />

                                      <Text style={{color:'white'}}>a</Text>

                                  <Checkbox
                                    style={{marginLeft:5}}
                                    size={30}
                                      keyValue={20}
                                      selectedArrayObject={selectedArrayOBJ}
                                      checked={false}
                                      color="#d3d3d3"
                                      labelColor="black"
                                      label="6b"
                                      value="6b" />

                        </View>


                        <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>

                              <Checkbox size={30}
                                        keyValue={21}
                                        selectedArrayObject={selectedArrayOBJ}
                                        checked={false}
                                        color="#d3d3d3"
                                        labelColor="black"
                                        label="6c"
                                        value="6c" />

                                        <Text style={{color:'white'}}>a</Text>

                                    <Checkbox
                                      style={{marginLeft:5}}
                                      size={30}
                                        keyValue={22}
                                        selectedArrayObject={selectedArrayOBJ}
                                        checked={false}
                                        color="#d3d3d3"
                                        labelColor="black"
                                        label="6d"
                                        value="6d" />

                        </View>

                        </View>

                        <View style={{flexDirection:'row' , height:50}}>

<View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
            
            <Checkbox size={30}
                      keyValue={23}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="7a"
                      value="7a" />

                      <Text style={{color:'white'}}>a</Text>

                  <Checkbox
                    style={{marginLeft:5}}
                    size={30}
                      keyValue={24}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="7b"
                      value="7b" />
    
    </View>


      <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
          
                    <Checkbox size={30}
                              keyValue={25}
                              selectedArrayObject={selectedArrayOBJ}
                              checked={false}
                              color="#d3d3d3"
                              labelColor="black"
                              label="7c"
                              value="7c" />

                              <Text style={{color:'white'}}>a</Text>

                          <Checkbox
                            style={{marginLeft:5}}
                            size={30}
                              keyValue={26}
                              selectedArrayObject={selectedArrayOBJ}
                              checked={false}
                              color="#d3d3d3"
                              labelColor="black"
                              label="7d"
                              value="7d" />
            
            </View>

</View>

                        <View style={{flexDirection:'row' , height:50}}>

<View style={{flexDirection:'row' , padding:5 , left:0 , position:'absolute'}}>
            
            <Checkbox size={30}
                      keyValue={27}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="8a"
                      value="8a" />

                      <Text style={{color:'white'}}>a</Text>

                  <Checkbox
                    style={{marginLeft:5}}
                    size={30}
                      keyValue={28}
                      selectedArrayObject={selectedArrayOBJ}
                      checked={false}
                      color="#d3d3d3"
                      labelColor="black"
                      label="8b"
                      value="8b" />
    
    </View>


      <View style={{flexDirection:'row' , padding:5 , right:0 , position:'absolute'}}>
          
                    <Checkbox size={30}
                              keyValue={29}
                              selectedArrayObject={selectedArrayOBJ}
                              checked={false}
                              color="#d3d3d3"
                              labelColor="black"
                              label="8c"
                              value="8c" />

                              <Text style={{color:'white'}}>a</Text>

                          <Checkbox
                            style={{marginLeft:5}}
                            size={30}
                              keyValue={30}
                              selectedArrayObject={selectedArrayOBJ}
                              checked={false}
                              color="#d3d3d3"
                              labelColor="black"
                              label="8d"
                              value="8d" />
            
            </View>

</View>

        </View>


         

            
      
     
      </View>
    );
  }
}
 
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      flex: 1,
      padding: 20,
      marginTop:40 
      
    },
    parent :{
        flex:1 ,
        backgroundColor:'#F5F5F5'
    } ,
 
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
  });
 
Checkbox.propTypes =
  {
    size: PropTypes.number,
    keyValue: PropTypes.number.isRequired,
    selectedArrayObject: PropTypes.object.isRequired,
    color: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool
  }
 
Checkbox.defaultProps =
  {
    size: 30,
    color: '#636c72',
    labelColor: '636c72',
    label: 'Default',
    checked: false,
    value: 'Default'
  }