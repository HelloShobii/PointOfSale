import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Left,Right,Icon,Header} from 'native-base';
import Card from './common/Card';


class Home extends React.Component {
render() {
  return (
    <View style={styles.container}>

    <Header 
    title="Home"
    style={{backgroundColor:'#000000'}}>
    <Left>
    <Icon 
    style={{color:'#ffffff'}}
    name="menu"
    onPress={()=> this.props.navigation.openDrawer()}
    />
    </Left>
    <Right>
    </Right>
    </Header>
    <View>
    <Card>
     <Text>Home page</Text>
     <Text>Home page</Text>
     <Text>Home page</Text>
     <Text>Home page</Text>
     <Text>Home page</Text>
     </Card>
     </View>
    </View>
  );
}
  }
  export default Home;

  const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop:20
}
});
