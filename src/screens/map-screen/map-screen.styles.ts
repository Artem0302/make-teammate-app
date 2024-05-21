import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: 0,
  },
  reset_btn: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderColor: '#000',
    borderWidth: 0.5,
  },
  reset_text: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
