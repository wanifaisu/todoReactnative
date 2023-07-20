import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../pages/LoginScreen';
import SignOut from '../components/Signout';
import {useSelector, useDispatch} from 'react-redux';
import {authUser} from '../redux/slices/auth';
import {resetTodo} from '../redux/slices/todo';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}: any) => {
  const dispatch = useDispatch();
  const isloggedIn = useSelector((state: any) => state.auth.logedIn);
  const [isLogin, setIsLoagin] = useState(false);
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userLogin');
      const login = value === 'yes' ? true : false;
      setIsLoagin(login);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  const handleLogout = () => {
    dispatch(authUser(false));
    dispatch(resetTodo([]));
    logOut();
  };
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('userLogin');
      retrieveData();
    } catch (error) {
      console.error('Error removing login data:', error);
    }
  };
  useEffect(() => {
    retrieveData();
  }, [isloggedIn]);
  return (
    <NavigationContainer>
      {isLogin ? (
        <Drawer.Navigator
          initialRouteName={'Home'}
          drawerContent={props => {
            return <SignOut {...props} handleLogout={handleLogout} />;
          }}>
          <Drawer.Screen
            options={{
              headerStyle: {
                backgroundColor: 'lightblue',
              },
            }}
            name="Home"
            component={HomeScreen}
          />
        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen
            options={{
              drawerItemStyle: {height: 0},
              headerShown: false,
              drawerStyle: {display: 'none'},
            }}
            name="Login"
            component={LoginScreen}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default DrawerNavigation;
