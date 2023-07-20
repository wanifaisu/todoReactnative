import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

const SignOut = ({handleLogout}: any) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignOut;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signOutButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 16,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
