import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>
{
    return (
   <View style={styles.containerStyle}>
       {props.children}
   </View>
    );
};

const styles={
    containerStyle:{
        borderBottomWidth:1,
        padding:10,
        backgroundColor:'#F8F7F7',
        justifyContent:'center',
        flexDirection:'row',
        borderColor:'#000',
        borderRadius:5,
        borderWidth:1,
        position:'relative'
    }
};



export default CardSection;