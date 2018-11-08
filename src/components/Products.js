import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Left,Right,Icon,Header} from 'native-base'

class Products extends React.Component {
render() {
  return (
    <View style={styles.container}>

    <Header
    style={{backgroundColor:'#000'}}>
    <Left>
    <Icon name="menu"
    style={{color:'#fff'}}
    onPress={()=> this.props.navigation.openDrawer()}
    />
    </Left>
    <Right>
    </Right>
    </Header>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <Text>Users page</Text>
     </View>
    </View>
  );
}
  }
  export default Products;

  const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop:20
}
});