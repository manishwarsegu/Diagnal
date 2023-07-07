import {Button, StatusBar, StyleSheet, View} from 'react-native';
import {listingScreen} from '../../utils/constants';
import { colors } from '../../utils/color';

function HomeScreen({navigation}): JSX.Element {
  console.log('mani', navigation);
  return (
    <>
      <StatusBar 
        backgroundColor={colors.black}
        animated={true}
      />
      <View style={styles.container}>
        <Button
          title="Goto Listing Screen"
          onPress={() => navigation.navigate(listingScreen)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default HomeScreen;
