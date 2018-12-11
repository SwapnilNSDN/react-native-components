
/*
* This Component is to set Footer to other components
* https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * https://github.com/xotahal/react-native-material-ui/blob/master/docs/Toolbar.md
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Footer extends React.Component{
    render(){
        return(
            <View style={styles.componentStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{this.props.title}</Text>
                    <Text style={styles.subTextStyle}>{this.props.subtitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentStyle: {
        width:'100%',   
        alignItems:'center',
        backgroundColor: '#CCC',
    },
    viewStyle: {
        width:'100%',  
        height: '100%',  
        alignItems:'center',
        backgroundColor: '#CCC',
        justifyContent: 'center'
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    subTextStyle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    dividerStyle:{
        width: '100%',
        height: 2,
        backgroundColor: '#CCC'
    }
})