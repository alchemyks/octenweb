
import React from 'react'
import {View, Text, FlatList} from "react-native";
import {StyleSheet} from "react-native";

const User =({item})=>{
    return <View style={styles.userBox}>
        <Text>
            {item.name}
        </Text>
    </View>
}

let styles = StyleSheet.create({
    userBox:{
        flex:1,
        alignItems: "center",
        backgroundColor: 'silver',
        height: 150
    }
});

export default User;
