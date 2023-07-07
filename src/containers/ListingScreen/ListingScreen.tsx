import { StyleSheet, Text, View } from "react-native";

function ListingScreen() {
  return (
    <View style={styles.container}>
      <Text>Goto Listing Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default ListingScreen;