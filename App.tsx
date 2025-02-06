import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import BarcodeScreen from './screens/BarcodeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
 
            if (route.name === 'Shipping') {
              iconName = focused
                ? require('./assets/active_ship_icon.png')
                : require('./assets/inactive_ship_icon.png');
            } else if (route.name === 'Profile') {
              iconName = focused
                ? require('./assets/active_profile_icon.png')
                : require('./assets/inactive_profile_icon.png');
            } else if (route.name === 'Wallet') {
              iconName = focused
                ? require('./assets/active_wallet_icon.png')
                : require('./assets/inactive_wallet_icon.png');
            } else if (route.name === 'Barcode') {
              iconName = focused
                ? require('./assets/active_barcode_icon.png')
                : require('./assets/inactive_barcode_icon.png');
            }

            return <Image source={iconName} style={{ width: 24, height: 24 }} />;
          },
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
