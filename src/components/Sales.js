import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Left,Right,Icon,Header} from 'native-base'
import Card from './common/Card';
import CardSection from './common/CardSection';
import Home from './Home';

class Sales extends React.Component {
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
    <Icon name="add-circle"
    style={{color:'#fff'}}
    //onPress={()=> this.props.navigation.Home()}
    />
    </Right>
    </Header>
    <View style={{flex:1}}>
    <Text style={styles.titleText}>Sales Details</Text>
    <Card>
    <CardSection>
     <Text>List1</Text>
     </CardSection>
     <CardSection>
     <Text>List2</Text>
     </CardSection>
     <CardSection>
     <Text>List3</Text>
     </CardSection>
     </Card>
     </View>
    </View>
  );
}
  }
  export default Sales;

  const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop:20
},
titleText:{
  fontSize: 30,
  alignItems: 'center',
  fontWeight:'600' ,
  justifyContent: 'center',
  paddingTop:20,
  paddingLeft:100
}
});