import {Button, StyleSheet, View} from 'react-native';
import { navigationConstants } from '../../utils/constants';
import {colors} from '../../utils/color';
import StatusBarComponent from '../../components/StatusBarComponent/StatusBarComponent';

function HomeScreen({navigation}): JSX.Element {
  console.log('mani', navigation);
  return (
    <>
      <StatusBarComponent />
      <View style={styles.container}>
        <Button
          title="Goto Listing Screen"
          onPress={() => navigation.navigate(navigationConstants.listingScreen)}
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
    backgroundColor: colors.black,
  },
});

export default HomeScreen;
