import {ActivityIndicator, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const MyButton = ({title, onPress, isLoading, containerStyle, textStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {isLoading && <ActivityIndicator size="small" color={'white'} />}
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    borderRadius: 5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
