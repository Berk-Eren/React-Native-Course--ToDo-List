import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingLeft: 8,
    flex: 0.05,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  toDoContainer: {
    backgroundColor: '#bc9010',
  },
  completedContainer: {
    backgroundColor: '#3b3b3b',
  },
  text: {
    fontSize: 29,
  },
  toDoText: {
    color: 'white',
  },
  completedText: {
    color: '#8d5454',
    textDecorationLine: 'line-through',
  },
});

export default styles;
