import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderWidth: 4,
    borderColor: '#3994f5',
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  name_wrapper: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontWeight: '400',
    fontSize: 22,
    color: '#000',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
  body: {
    paddingVertical: 16,
    flex: 1,
  },
  subtitle: {
    maxWidth: '60%',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'right',
    color: '#000',
  },
  title_wrapper: {
    marginBottom: 16,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  change_btn: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 0.5,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  exit_btn: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 0.5,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'center',
  },
  btn_text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 22,
    fontWeight: '500',
  },
});
