import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal_content: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: '60%',
    backgroundColor: '#FFF',
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
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'space-between',
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
});
