import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#EFFBF2',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  input_wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    padding: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  send_btn: {
    marginLeft: 10,
  },
});
