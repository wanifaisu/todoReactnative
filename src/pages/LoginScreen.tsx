import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';
import {authUser} from '../redux/slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      dispatch(authUser(true));
      storeData();
    } else {
      Alert.alert('Oops!', 'Please provide email and password', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('userLogin', 'yes');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
  React.useEffect(() => {
    const closeDrawerOnLogin = navigation.addListener('focus', () => {
      navigation.dispatch(DrawerActions.closeDrawer());
    });

    return closeDrawerOnLogin;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
