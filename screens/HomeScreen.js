import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [user, setUser] = useState(null);
  AsyncStorage.getItem('user')
    .then(data => {
      setUser(JSON.parse(data));
    })
    .catch(error => {
      console.error(error);
    });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trang chủ</Text>
      <Text>{user && ('Chào ' + user.firstName + ' ' + user.lastName + '!')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
