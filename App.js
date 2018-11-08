import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import {createDrawerNavigator} from 'react-navigation';
import Home from './src/components/Home';
import Products from './src/components/Products';
import Users from './src/components/Users';
import Sales from './src/components/Sales';
import AddSalesTransaction from './src/components/AddSalesTransaction';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      // <LoginForm />
      // </View>
    <MyApp />
    );
  }
}
const MyApp = createDrawerNavigator ({
  Home:Home,
  Product:Products,
  User:Users,
  AddTransaction:AddSalesTransaction,
  Sale:Sales,
  Login:LoginForm,
  
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1C8CBD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
