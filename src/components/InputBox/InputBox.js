import {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import styles from './InputBox.style';

const InputBox = props => {
  const [toDo, setToDo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Yapılacak..."
        placeholderTextColor="white"
        color="white"
        defaultValue={toDo}
        value={toDo}
        onChangeText={input => setToDo(input)}></TextInput>

      <TouchableOpacity
        style={[
          styles.buttonContainer,
          Boolean(toDo.trim())
            ? styles.activeButtonContainer
            : styles.disabledButtonContainer,
        ]}
        onPress={() => {
          props.addTask({name: toDo});
          setToDo('');
        }}
        disabled={!Boolean(toDo.trim())}>
        <View>
          <Text color="#a29f95" style={styles.buttonText}>
            Kaydet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
