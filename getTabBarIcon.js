// utils/getTabBarIcon.js
import { Image } from 'react-native';

export const getTabBarIcon = (routeName, focused) => {
  let iconName;
  
  switch (routeName) {
    case 'Shipping':
      iconName = focused
        ? require('../assets/active_ship_icon.png')
        : require('../assets/inactive_ship_icon.png');
      break;
    case 'Profile':
      iconName = focused
        ? require('../assets/active_profile_icon.png')
        : require('../assets/inactive_profile_icon.png');
      break;
    case 'Wallet':
      iconName = focused
        ? require('../assets/active_wallet_icon.png')
        : require('../assets/inactive_wallet_icon.png');
      break;
    case 'Barcode':
      iconName = focused
        ? require('../assets/active_barcode_icon.png')
        : require('../assets/inactive_barcode_icon.png');
      break;
    default:
      break;
  }

  return <Image source={iconName} style={{ width: 24, height: 24 }} />;
};
