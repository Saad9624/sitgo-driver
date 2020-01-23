import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator , DrawerItems} from 'react-navigation-drawer';
import registration from './screens/registration' ;
import login from './screens/login' ;
import signup from './screens/signup' ;
import otp from './screens/otp' ;
import dashboard from './screens/dashboard';
import leftdrawer from './screens/sidedrawer' ; 
 
import activebookings from './screens/bookings/activebooking' ; 
import bookinghistory from './screens/bookings/bookinghistory' ;
import testing from './screens/testing' ;
import creditcard from './screens//payments/creditcard' ;
import addingitemsinfl from './screens/testingfolder/addingitemsinfl' ;
import addcard from './screens/payments/addcard' ;
import selectseats from './screens/testingfolder/selectseats' ; 
import payment from './screens/payments/payment' ;
import currentloc from './screens/maps/currentloc' ;
import locatebus from './screens/maps/locatebus';
import routes from './screens/testingfolder/routes';
import filter from './screens/filters/filter' ;
import updateprofile from './screens/editprofile/updateprofile';
import myprofile from './screens/editprofile/myprofile';
import act_booking_testing from './screens/bookings/act_booking_testing' 
import previous_booking from './screens/bookings/previous_booking_tesing';

const RootStack = createStackNavigator(
    {
      Home: registration,
      LOGIN : login ,
      SIGNUP : signup ,
      OTP : otp  ,
      //  DASH: dashboard ,
     
     AB : activebookings ,
     BH : bookinghistory , 
     MODAL: testing ,
     CREDITCARD : creditcard ,
     ADDITEM : addingitemsinfl,
     ADDCARD: addcard ,
     SS: selectseats , 
     PAYMENT : payment ,
     MAP : currentloc , 
     LOCATEBUS: locatebus ,
     ROUTES: routes ,
     LD : leftdrawer ,
     FILTER :filter ,
     UP: updateprofile ,
     MYPROFILE: myprofile ,

     ACT_BOOKING: act_booking_testing ,
     PREV_BOOKING: previous_booking ,

    
    },
    {
      initialRouteName: 'MAP',
    }
  );

  RootStack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'locked-closed';
    let gesturesEnabled = 'true' ; 
  
    if (navigation.state.index == 3 || navigation.state.index == 2 ) {
      drawerLockMode = 'locked-unlocked';
    }
    else{
      drawerLockMode = 'locked-closed';
    }

    

    return {
      drawerLockMode,
      gesturesEnabled 
    };
  };


  const DrawerNavigation =  createDrawerNavigator({
    Home: RootStack ,
   
    
  },
  {
    
      contentComponent:leftdrawer
    
  } );
  

  export default createAppContainer(DrawerNavigation);