import React, { useEffect ,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './assets/screens/AuthContext';
import Home1 from './assets/screens/Home1';
import Newuser from './assets/screens/Newuser';
import Onboard from './assets/screens/Onboard';
import Login from './assets/screens/Login';
import Authentication from './assets/screens/Authentication';
import Intro from './assets/screens/Intro';
import Profile from './assets/screens/BottomNavigator/SubScreen/Profile';
import Splash from './assets/screens/Splash';
import ExhangeOldToysElements from './assets/screens/BottomNavigator/SubScreen/ExhangeOldToysElements';
import ExploretoyBck from './assets/screens/BottomNavigator/components/ExploretoyBck';
import RentaToy from './assets/screens/BottomNavigator/SubScreen/RentaToy';
import RideOnToy from './assets/screens/BottomNavigator/SubScreen/RideOnToy';
import ExploreApi from './assets/API/ExploreApi';
import Selecttoyintro from './assets/screens/BottomNavigator/SubScreen/Selecttoyintro';
import HowSelectToy from './assets/screens/BottomNavigator/SubScreen/HowSelectToy';
import Slider from './assets/screens/BottomNavigator/components/Slider';
import ProductPage from './assets/screens/BottomNavigator/SubScreen/ProductPage';
import Member from './assets/screens/BottomNavigator/SubScreen/Member';
import CartPage from './assets/screens/BottomNavigator/SubScreen/CartPage';
import { CartProvider } from './assets/screens/BottomNavigator/components/cart'; 
import Payment from './assets/screens/BottomNavigator/SubScreen/Payment';
import Delivery from './assets/screens/BottomNavigator/SubScreen/Delivery';
import Categories from './assets/API/Categories';
import Orientation from 'react-native-orientation-locker';
import TestLinking from './assets/API/TestLinking';
import { MembershipProvider } from './assets/screens/BottomNavigator/components/cart';
import Cart from './assets/API/Hello';
import SearchResults from './assets/API/SearchResults';
import { MemberProvider } from './assets/API/MemberContext';
import ProfileUpdate from './assets/API/ProfileUpdate';
import Mytoys from './assets/screens/BottomNavigator/SubScreen/Mytoys';
import testing from './assets/API/testing';
import WithoutMemb from './assets/screens/BottomNavigator/SubScreen/WithoutMemb';
import BottomNavigator from './assets/screens/BottomNavigator/BottomNavigator';
import { registerListenerWithOneSignal,getFcmToken } from './assets/notification/NotifictionService';
import OneSignal from 'react-native-onesignal';

// import FloatingButtons from './assets/screens/components/FloatingButtons';
// import Mytoys from './assets/screens/BottomNavigator/Mytoys';
const Stack = createNativeStackNavigator();

function AppNavigator() {

  // useEffect(() => {
  //   // Ensure OneSignal is defined
  //   if (OneSignal) {
  //     // Get the FCM token when the app is loaded
  //     if (getFcmToken) {
  //       console.log("Calling getFcmToken...");
  //       getFcmToken();
  //     } else {
  //       console.error("getFcmToken is not defined!");
  //     }
  
  //     // Register notification listeners for OneSignal
  //     if (registerListenerWithOneSignal) {
  //       console.log("Registering listeners with OneSignal...");
  //       const unsubscribe = registerListenerWithOneSignal(); // Register notification listeners
  
  //       // Cleanup function to remove listeners when the component is unmounted
  //       return () => {
  //         console.log("Unsubscribing from OneSignal listeners...");
  //         unsubscribe(); // Call the unsubscribe function to clean up
  //       };
  //     } else {
  //       console.error("registerListenerWithOneSignal is not defined!");
  //     }
  //   } else {
  //     console.error("OneSignal is not initialized properly!");
  //   }
  // }, []);
  
  
  

  return (
    <CartProvider>
      <MemberProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} options={{
            gestureEnabled: false, // Disable swipe-back gesture
          }}  /> 
             <Stack.Screen name="Home1" component={Home1} options={{
            gestureEnabled: false, // Disable swipe-back gesture
          }}  />
          <Stack.Screen name="Intro" component={Intro} />
           <Stack.Screen name="Onboard" component={Onboard} options={{
            gestureEnabled: false, // Disable swipe-back gesture
          }}  />
           <Stack.Screen name="Authentication" component={Authentication} />
           <Stack.Screen name="WithoutMemb" component={WithoutMemb} />
           <Stack.Screen name="Newuser" component={Newuser} />
           <Stack.Screen name="Selecttoyintro" component={Selecttoyintro} /> 

          <Stack.Screen name="Profile" component={Profile} />
          {/* <Stack.Screen name="Mytoys" component={Mytoys} /> */}
          <Stack.Screen name="ExhangeOldToysElements" component={ExhangeOldToysElements} />
          <Stack.Screen name="ExploreApi" component={ExploreApi} />
          <Stack.Screen name="ExploretoyBck" component={ExploretoyBck} />
          {/* i want to use floating button from here */}
          <Stack.Screen name="RentaToy" component={RentaToy} />
          <Stack.Screen name="RideOnToy" component={RideOnToy} />
         
          
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="ProductPage" component={ProductPage} /> 
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{
            gestureEnabled: false, // Disable swipe-back gesture
          }} /> 
       
         
         
          <Stack.Screen name="HowSelectToy" component={HowSelectToy} />
       
          <Stack.Screen name="Member" component={Member} />
          <Stack.Screen name="CartPage" component={CartPage} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="TestLinking" component={TestLinking} />
          <Stack.Screen name="Hello" component={Cart} />
          <Stack.Screen name="SearchResults" component={SearchResults} />
          <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
          <Stack.Screen name="Mytoys" component={Mytoys} />
          <Stack.Screen name="testing" component={testing} />
      
        </Stack.Navigator>
      
      </NavigationContainer>
      </MemberProvider>
    </CartProvider>
  );
}

export default AppNavigator;
