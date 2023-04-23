import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#605e56',
  },
  searchBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 5,
    width: '100%',
  },
  separator: {
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonContainer: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '86%',
    padding: 5,
  },
  activeButtonContainer: {
    backgroundColor: '#d1a911',
  },
  disabledButtonContainer: {
    backgroundColor: '#aba798',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
