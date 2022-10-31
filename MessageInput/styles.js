import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    color: '#333',
    fontSize: 14,
  },
  safeArea: {
    backgroundColor: '#222',
  },
  TextInputWrapper: {
    width: '100%',
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  avatarStyle: {
    width: 24,
    height: 24,
  },
  containerStyle: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
  },
  mentionAvatarStyle: {
    width: 28,
    height: 28,
  },
  mentionContainerStyle: {
    width: 28,
    height: 28,
  },
  textInputStyles: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  inputIcon: {
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  mentionItemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  mentionItemText: {
    marginLeft: 6,
    color: '#fff',
    fontSize: 12,
  },
  listWrapper: {
    maxHeight: 124,
    padding: 12,
    backgroundColor: '#333',
  },
  footerClearfix: {
    height: 12,
  },
});
