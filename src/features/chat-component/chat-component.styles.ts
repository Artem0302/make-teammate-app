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
    fontSize: 16,
    color: '#000000',
  },
  text_wrapper: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  last_message: {
    color: '#000000',
    maxWidth: '80%',
  },
  left_side: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_side: {
    flexDirection: 'row',
  },
  time: {
    marginLeft: 4,
    color: '#007BFF',
  },
});
