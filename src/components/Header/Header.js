import React from 'react';
import {View, Text} from 'react-native';

import styles from './Header.style';

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.numOfTasks}</Text>
    </View>
  );
}

export default Header;
