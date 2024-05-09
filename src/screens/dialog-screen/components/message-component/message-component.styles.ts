import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  message_wrapper: {
    margin: 8,
    padding: 8,
    borderRadius: 16,
    maxWidth: '70%',
    borderWidth: 0.5,
  },
  in: {
    backgroundColor: '#F2F2F2',
    alignSelf: 'flex-start',
  },
  out: {
    backgroundColor: '#BCF5A9',
    alignSelf: 'flex-end',
  },
  message: {
    fontWeight: '500',
    color: '#000',
    fontSize: 16,
  },
  time: {
    position: 'absolute',
    color: '#007BFF',
    fontSize: 10,
    right: 10,
    bottom: 6,
  },
});
