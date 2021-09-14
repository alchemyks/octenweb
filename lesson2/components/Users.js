import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {View, Text, FlatList} from "react-native";
import {fetchUsers} from "../services/api.services";
import User from "./User";


const Users = ({navigation}) => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetchUsers().then(value => setUsers([...value]));
    },[]);

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item})=><User item={item} nav={navigation}/>}
                keyExtractor={item=>item.id+''}

            />
        </View>
    );
};

export default Users;

let styles = StyleSheet.create({});
