import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    borderWidth: 3,
    borderColor: '#3994f5',
    borderRadius: 12,
    backgroundColor: '#FFF',
  },
  img: {
    borderRadius: 8,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  name: {
    maxWidth: 50,
    textAlign: 'center',
  },
  triangle: {
    borderTopWidth: 20,
    borderRightWidth: 15,
    borderBottomWidth: 0,
    borderLeftWidth: 15,
    borderTopColor: '#3994f5',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});
