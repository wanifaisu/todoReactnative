import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
const TodoItem = ({item, deleteHandler, dataLoader}: any) => {
  return (
    <React.Fragment>
      <View style={styles.item}>
        <Text>{item.name}</Text>

        <TouchableOpacity onPress={() => deleteHandler(item.id)}>
          <Icon name="delete" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#ccd8ff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TodoItem;
