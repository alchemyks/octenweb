
import React from 'react'
import  {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from "react-native";
import {fetchUsers} from "../services/api.jsonplaceholder.servicec";
import User from "./User";

const Users = ()=>{
    let [users, setUsers] = useState()
    useEffect(()=>{
        fetchUsers().then(value => setUsers([...value]));
    },[]);
    return <View style={styles.usersBox}>
        <FlatList
            data={users}
            renderItem={({item})=><User item={item}/>}
            keyExtractor={item => `${item.id}`}
        />
    </View>
}

let styles = StyleSheet.create({
    usersBox:{
        marginTop: 50,
        justifyContent: 'center',
    }
})

export default Users
