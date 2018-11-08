import React , {Component} from 'react';
import {Text,View,Button,TouchableOpacity,TextInput} from 'react-native';
import navigation from 'react-navigation';
import {Left,Right,Icon,Header} from 'native-base'
import Home from './Home';
import {createDrawerNavigator} from 'react-navigation';
import Card from './common/Card';


class LoginForm extends Component{

    // constructor(props){
    //     super(props);
    // }

    state = {
        email: '',
        password: '',
      };

      // onLogin(){
      //   // this.props.navigation.navigate('Home');
      // }
    

    render(){
        return(

    <View style={{flex:1}}>
    <Header 
    style={{backgroundColor:'#000'}}>
    <Left>
    <Icon 
    style={{color:'#fff'}}
    name="menu"
    onPress={()=> this.props.navigation.openDrawer()}
    />
    </Left>
    <Right>
    </Right>    
    </Header>

    <View style={styles.container}>
    
      <Text style={styles.titleText}>Login</Text>

      <Card style={{backgroundColor:'#F3EDED'}}>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='email'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'black'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
         //onPress={this.onLogin.bind(this)}
         onPress={()=> this.props.navigation.Home}
         //onPress={() => this.props.navigation.navigate('Home')}
       
       >
         <Text style={styles.buttonText}> Login </Text>
       </TouchableOpacity>
       </Card>
      </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
  titleText:{
    fontSize: 40,
    alignItems: 'center',
    fontWeight:'600' ,
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    alignSelf:'auto',
    width: 300,
    borderWidth: 1,
    borderRadius: 25,

    marginBottom: 10,
  },
  buttonText:{
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#fff'
  },
  input: {
    width: 300,
    //fontFamily: 'Arial',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#000',
    marginVertical: 10,
  }
};
export default LoginForm;