import {useState} from 'react';
import {View, Text, Animated, Alert, TouchableOpacity} from 'react-native';

import styles from './TaskCard.style';

const TaskCard = props => {
  const [isCompleted, setIsCompleted] = useState(false);
  console.log('TAsCrad');

  const confirmDeletion = (item, deleteTask) => {
    Alert.alert('GÖREV SİLME', 'Silmek istediğinizden emin misiniz?', [
      {
        text: 'Evet',
        onPress: () => deleteTask({id: item.id}),
      },
      {
        text: 'Hayır',
        onPress: () => {},
      },
    ]);
  };

  return (
    <View
      style={[
        styles.container,
        isCompleted ? styles.completedContainer : styles.toDoContainer,
      ]}>
      <TouchableOpacity
        onPress={() => {
          setIsCompleted(!isCompleted);
          props.updateTaskStatus({id: props.taskItem.id, done: !isCompleted});
        }}
        onLongPress={() => confirmDeletion(props.taskItem, props.deleteTask)}
        onHideUnderlay={() => {
          console.log('Hello');
        }}>
        <Text
          style={[
            styles.text,
            isCompleted ? styles.completedText : styles.toDoText,
          ]}>
          {props.taskItem.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
