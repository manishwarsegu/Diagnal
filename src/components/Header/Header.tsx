import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRef, useState} from 'react';
import {colors} from '../../utils/color';
import StatusBarComponent from '../StatusBarComponent/StatusBarComponent';
import CustomTextComponent from '../CustomTextComponent/CustomTextComponent';
import {navigationConstants} from '../../utils/constants';
import {Searchbar} from 'react-native-paper';

function Header({navigation, title}) {
  const [searchIconClicked, setsearchIconClicked] = useState(false);
  return (
    <>
      <StatusBarComponent />
      <ImageBackground
        source={require('../../../assets/images/navBar.png')}
        imageStyle={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.leftItems}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationConstants.homeScreen)
              }>
              <Image
                style={[
                  styles.iconStyle,
                  {
                    marginRight: 15,
                  },
                ]}
                source={require('../../../assets/images/back.png')}
              />
            </TouchableOpacity>
            <CustomTextComponent>{title}</CustomTextComponent>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/search.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Searchbar
          placeholder="Search"
          onChangeText={(e) => console.log('first', e)}
          value={''}
        />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundImage: {
    height: 92,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default Header;
