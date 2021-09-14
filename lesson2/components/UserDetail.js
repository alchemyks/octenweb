import React from 'react';
import {Text, View} from "react-native";

const UserDetail = (props) => {
    let {route:{params:{data:{item}}}} = props;
    return (
        <View>
            <Text>{item.email}</Text>
        </View>
    );
};

export default UserDetail;
