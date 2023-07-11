import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/color';

function CustomTextComponent({
  children,
  customStyles,
}: {
  children: String;
  customStyles?: Object;
}) {
  return <Text style={[styles.textStyle, customStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    color: colors.white,
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 22,
  },
});

export default CustomTextComponent;
