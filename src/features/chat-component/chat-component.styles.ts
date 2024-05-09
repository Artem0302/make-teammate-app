import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: '600',
    marginBottom: 8,
    color: '#000000',
  },
  last_message: {
    color: '#000000',
  },
  left_side: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_wrapper: {
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  right_side: {
    flexDirection: 'row',
  },
  time: {
    marginLeft: 4,
    color: '#007BFF',
  },
});
