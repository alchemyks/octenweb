import React from 'react'
import {Text, View, StyleSheet, Button} from "react-native";


const User = ({item, nav:{navigate}})=>{


    const onPress = ()=>{
        navigate('Detail', {data:{item}})
    }
    return<View  style={styles.userBox}>
        <Text>{item.id} - {item.name}</Text>
        <Button title={'Detail'} onPress={onPress}/>
    </View>
}


export default User;

let styles = StyleSheet.create({
    userBox:{
        marginLeft:20
    }
})
