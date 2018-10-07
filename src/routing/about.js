import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";

class About extends Component {
    render() {
        return(
            <View>
                <TouchableOpacity onPress={Actions.About}>
                    <Text>About Me</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default About;