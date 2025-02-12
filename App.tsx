import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import BarcodeScreen from './screens/BarcodeScreen';
import { getTabBarIcon } from './utils/getTabBarIcon'; // Import the utility

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused), // Use the utility function
        })}
      >
        <Tab.Screen name="Shipping" component={ShippingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Barcode" component={BarcodeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
