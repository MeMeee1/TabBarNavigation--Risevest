import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';  
import { createDrawerNavigator } from '@react-navigation/drawer';  
import ShippingScreen from './screens/ShippingScreen';  
import ProfileScreen from './screens/ProfileScreen';  
import WalletScreen from './screens/WalletScreen';  
import BarcodeScreen from './screens/BarcodeScreen';  

const Drawer = createDrawerNavigator();  

const App = () => {  
  return (  
    <NavigationContainer>  
      <Drawer.Navigator initialRouteName="Shipping">  
        <Drawer.Screen name="Shipping" component={ShippingScreen} />  
        <Drawer.Screen name="Profile" component={ProfileScreen} />  
        <Drawer.Screen name="Wallet" component={WalletScreen} />  
        <Drawer.Screen name="Barcode" component={BarcodeScreen} />  
      </Drawer.Navigator>  
    </NavigationContainer>  
  );  
};  

export default App;
