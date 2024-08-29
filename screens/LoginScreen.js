import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import AuthAPI from "../API/AuthAPI";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const data = {
      email,
      password
    };

    AuthAPI.login(data)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error); 
        setError(error.response.data.message);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đăng nhập</Text>
      <Text style={styles.errorText}>{error}</Text>
      
      <TextInput 
        value={email}
        onChangeText={setEmail}
        style={styles.input} placeholder="Email" />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        style={styles.input} placeholder="Mật khẩu" secureTextEntry={true} />
      <Button title="Đăng nhập" onPress={handleLogin} />

      <Text style={styles.subText}>
        Chưa có tài khoản?
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{color: 'blue'}}> Đăng ký ngay</Text>
        </Pressable>
      </Text>

    </View>
  );
}

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
  subText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  errorText: {
    color: 'red',
    backgroundColor: 'pink',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default LoginScreen;