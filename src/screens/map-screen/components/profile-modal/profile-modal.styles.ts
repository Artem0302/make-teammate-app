import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '70%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modal_content: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  img: {
    borderRadius: 40,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  header_text_wrapper: {
    flex: 1,
  },
  header_text: {
    marginLeft: 8,
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
  },
  header_birth: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
  info: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  footer: {
    paddingVertical: 16,
    justifyContent: 'center',
  },
  btn: {
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    flex: 1,
    alignItems: 'center',
    borderColor: '#000',
    marginHorizontal: 16,
  },
  btn_text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
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
