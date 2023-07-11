import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header/Header';
import { colors } from '../../utils/color';
import CustomTextComponent from '../../components/CustomTextComponent/CustomTextComponent';

function ListingScreen({navigation}) {
  return (
    <>
      <Header navigation={navigation} title='Romantic Comedy'/>
      <View style={styles.container}>
        <CustomTextComponent>Listing Screen</CustomTextComponent>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.black,
  },
});

export default ListingScreen;
